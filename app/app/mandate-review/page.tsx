'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  IconArrowRight,
  IconAward,
  IconBriefcase,
  IconBuilding,
  IconBusinessplan,
  IconCalendar,
  IconCalendarTime,
  IconCashBanknote,
  IconCheck,
  IconChevronRight,
  IconCircleCheck,
  IconClock,
  IconCreditCard,
  IconCurrency,
  IconDeviceAnalytics,
  IconHeart,
  IconIdBadge2,
  IconInfoCircle,
  IconLock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconShield,
  IconStar,
  IconTarget,
  IconTrendingUp,
  IconUser,
  IconUsers,
  IconWallet,
} from '@tabler/icons-react';
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Alert,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  List,
  ListItem,
  Modal,
  Paper,
  rem,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Timeline,
  TimelineItem,
  Title,
} from '@mantine/core';
import PageHeaderSection from '@/components/Sections/PageHeaderSection';
import { dailypayResource } from '@/config/sdk';

export default function HrApprovalPage() {
  const [isApproved, setIsApproved] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  // Extract URL parameters
  const token = searchParams.get('token') || '';
  const id = searchParams.get('id') || '';
  const email = searchParams.get('email') || '';
  const data = searchParams.get('data') || '';
  const category = searchParams.get('category') || '';

  // Debug logging
  useEffect(() => {
    console.log('URL Parameters:', { token, id, email, data, category });
  }, [token, id, email, data, category]);

  // Decode and parse the data parameter
  const [parsedData, setParsedData] = useState<any>(null);

  useEffect(() => {
    if (data) {
      try {
        const decodedData = atob(data);
        console.log('Decoded data:', decodedData);
        
        // Parse the key=value format instead of JSON
        const parsed: any = {};
        const pairs = decodedData.split(', ');
        
        pairs.forEach(pair => {
          const [key, ...valueParts] = pair.split('=');
          if (key && valueParts.length > 0) {
            let value = valueParts.join('='); // Rejoin in case value contains '='
            value = value.trim();
            
            // Fix corrupted currency symbols
            value = value.replace(/â¦/g, '₦');
            value = value.replace(/â/g, '₦');
            value = value.replace(/₦¦/g, '₦');
            value = value.replace(/₦â¦/g, '₦');
            value = value.replace(/₦¦/g, '₦');
            value = value.replace(/¦/g, '');
            
            // Clean up any extra spaces around the currency symbol
            value = value.replace(/₦\s+/g, '₦ ');
            value = value.replace(/\s+₦/g, ' ₦');
            
            parsed[key.trim()] = value;
          }
        });
        
        console.log('Parsed data:', parsed);
        setParsedData(parsed);
        
        // Update form data with parsed information
        setFormData(prev => {
          // Helper function to clean and format currency values
          const formatCurrency = (value: string) => {
            if (!value) return '';
            // Remove all non-numeric characters except commas and dots
            const numericValue = value.replace(/[^0-9,.]/g, '');
            return `₦${numericValue}`;
          };

          return {
            ...prev,
            employeeName: parsed.employeeName || prev.employeeName,
            monthlySalary: parsed.monthlySalary ? formatCurrency(parsed.monthlySalary) : prev.monthlySalary,
            takeHomePay: parsed.takeHomePay ? formatCurrency(parsed.takeHomePay) : prev.takeHomePay,
            role: parsed.jobRole || parsed.jobTitle || prev.role,
            employer: parsed.employer || prev.employer,
            employerAddress: parsed.employerAddress || prev.employerAddress,
            duration: parsed.duration || prev.duration,
          };
        });
      } catch (error) {
        console.error('Error parsing data parameter:', error);
        setError('Invalid data parameter in URL');
      }
    }
  }, [data]);

  async function approveDailyPayAccess(comment?: string) {
    if (!token || !id || !email) {
      setError('Missing required parameters: token, id, or email');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await dailypayResource.approveMandateRequest({
        encryptedEmail: email,
        id: id,
        token: token,
        comment: comment || '',
      });

      if (response.data?.success) {
        setIsApproved(true);
        setShowSuccessModal(true);
      } else {
        setError(response.data?.message || 'Approval failed');
      }
    } catch (error: any) {
      console.error('Error approving mandate:', error);
      setError(error.response?.data?.message || 'An error occurred during approval');
    } finally {
      setIsLoading(false);
    }
  }

  const [formData, setFormData] = useState({
    employeeName: '',
    monthlySalary: '',
    takeHomePay: '',
    role: '',
    employer: '',
    employerAddress: '',
    duration: '',
    hrEmail: '',
    hrPhone: '',
  });

  const [approvalData, setApprovalData] = useState({
    salaryPaidBy3rd: false,
    employeeCurrentlyWorks: false,
    salaryToDailyPayAccount: false,
    notifyDailyPayFirst: false,
    acceptRepresentation: false,
    copyOnTermination: false,
  });

  const [additionalComment, setAdditionalComment] = useState('');

  const handleApprovalChange = (field: string, value: boolean) => {
    setApprovalData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleApprove = () => {
    // Check if all required approvals are given
    const allApproved = Object.values(approvalData).every((value) => value);

    if (!allApproved) {
      alert('Please confirm all required approvals before proceeding.');
      return;
    }

    approveDailyPayAccess(additionalComment);
  };

  // Show error if URL parameters are missing
  if (error) {
    return (
      <Container size="lg" py={80}>
        <Alert title="Error" color="red" variant="light" icon={<IconInfoCircle size={16} />}>
          {error}
        </Alert>
      </Container>
    );
  }

  // Show error if required parameters are missing
  if (!token || !id || !email) {
    return (
      <Container size="lg" py={80}>
        <Alert
          title="Missing Required Parameters"
          color="red"
          variant="light"
          icon={<IconInfoCircle size={16} />}
        >
          This approval link is missing required parameters. Please ensure you have a valid approval
          link.
          <br />
          <Text size="sm" mt="xs">
            Missing: {!token ? 'token ' : ''}
            {!id ? 'id ' : ''}
            {!email ? 'email' : ''}
          </Text>
        </Alert>
      </Container>
    );
  }

  // Show loading if parsing data
  if (data && !parsedData) {
    return (
      <Container size="lg" py={80}>
        <Stack align="center" gap="lg">
          <Text>Loading employee information...</Text>
        </Stack>
      </Container>
    );
  }

  const SuccessModal = () => (
    <Modal
      opened={showSuccessModal}
      onClose={() => setShowSuccessModal(false)}
      size="md"
      centered
      withCloseButton={false}
    >
      <Stack align="center" gap="lg" py={40}>
        <ThemeIcon size={80} radius="xl" color="green">
          <IconCircleCheck size={40} />
        </ThemeIcon>
        <Title order={2} ta="center" c="green">
          Approval Successful!
        </Title>
        <Text ta="center" size="lg" c="gray.7">
          {formData.employeeName} has been approved for DailyPay access. They will receive a
          notification and can start earning daily wages immediately.
        </Text>
        <Button
          size="lg"
          onClick={() => setShowSuccessModal(false)}
          leftSection={<IconCheck size={20} />}
        >
          Done
        </Button>
      </Stack>
    </Modal>
  );

  return (
    <>
      <PageHeaderSection
        title="HR Approval"
        caption="Employee DailyPay Request Approval"
        badge="HR Approval"
      />

      <Container size="lg" py={80}>
        {/* Debug Information - Remove in production */}
        {process.env.NODE_ENV === 'development' && (
          <Alert title="Debug Information" color="blue" variant="light" mb="lg">
            <Text size="sm">
              <strong>Token:</strong> {token.substring(0, 20)}...
              <br />
              <strong>ID:</strong> {id.substring(0, 20)}...
              <br />
              <strong>Email:</strong> {email.substring(0, 20)}...
              <br />
              <strong>Category:</strong> {category}
              <br />
              <strong>Data:</strong> {data.substring(0, 50)}...
            </Text>
          </Alert>
        )}

        {/* Introduction */}
        <Stack align="center" gap="lg" mb={60}>
          <Text size="sm" tt="uppercase" fw={500} c="gray.6">
            Employee DailyPay Request
          </Text>
          <Title ta="center" size={rem(32)} fw={400} c="#0b4650" maw={600}>
            Review and Approve
            <Text component="span" fw={600} c="#329aae">
              {' '}
              DailyPay Access
            </Text>
          </Title>
          <Text ta="center" size="lg" c="gray.7" maw={550} lh={1.6} fw={300}>
            Please review the employee information below and confirm the required approvals to
            enable DailyPay access.
          </Text>
          <Divider w={60} size="sm" color="#329aae" />
        </Stack>

        <Grid gutter="xl">
          {/* Employee Information */}
          <GridCol span={{ base: 12, md: 5 }}>
            <Card shadow="sm" padding="xl" radius="md" withBorder>
              <Stack gap="lg">
                <Group>
                  <ThemeIcon size={50} radius="xl" color="blue">
                    <IconUser size={25} />
                  </ThemeIcon>
                  <div>
                    <Title order={3} size="h4">
                      Employee Information
                    </Title>
                    <Text size="sm" c="gray.6">
                      DailyPay Request Details
                    </Text>
                  </div>
                </Group>

                <Divider />

                <Stack gap="md">
                  <Group>
                    <IconUser size={20} color="#329aae" />
                    <div>
                      <Text size="sm" fw={500}>
                        Employee Name
                      </Text>
                      <Text size="lg">{formData.employeeName}</Text>
                    </div>
                  </Group>

                  <Group>
                    <IconBriefcase size={20} color="#329aae" />
                    <div>
                      <Text size="sm" fw={500}>
                        Role
                      </Text>
                      <Text size="lg">{formData.role}</Text>
                    </div>
                  </Group>

                  <Group>
                    <IconBuilding size={20} color="#329aae" />
                    <div>
                      <Text size="sm" fw={500}>
                        Employer
                      </Text>
                      <Text size="lg">{formData.employer}</Text>
                    </div>
                  </Group>

                  <Group>
                    <IconMapPin size={20} color="#329aae" />
                    <div>
                      <Text size="sm" fw={500}>
                        Employer Address
                      </Text>
                      <Text size="lg">{formData.employerAddress}</Text>
                    </div>
                  </Group>

                  <Group>
                    <IconCalendarTime size={20} color="#329aae" />
                    <div>
                      <Text size="sm" fw={500}>
                        Duration
                      </Text>
                      <Text size="lg">{formData.duration}</Text>
                    </div>
                  </Group>

                  <Group>
                    <IconCurrency size={20} color="#329aae" />
                    <div>
                      <Text size="sm" fw={500}>
                        Monthly Salary
                      </Text>
                      <Text size="lg">{formData.monthlySalary}</Text>
                    </div>
                  </Group>

                  <Group>
                    <IconWallet size={20} color="#329aae" />
                    <div>
                      <Text size="sm" fw={500}>
                        Take Home Pay
                      </Text>
                      <Text size="lg" fw={600} c="green">
                        {formData.takeHomePay}
                      </Text>
                    </div>
                  </Group>
                </Stack>
              </Stack>
            </Card>
          </GridCol>

          {/* Approval Form */}
          <GridCol span={{ base: 12, md: 7 }}>
            <Card shadow="sm" padding="xl" radius="md" withBorder>
              <Stack gap="lg">
                <Group>
                  <ThemeIcon size={50} radius="xl" color="green">
                    <IconCheck size={25} />
                  </ThemeIcon>
                  <div>
                    <Title order={3} size="h4">
                      Required Approvals
                    </Title>
                    <Text size="sm" c="gray.6">
                      Please confirm the following
                    </Text>
                  </div>
                </Group>

                <Divider />

                <Alert
                  title="Important Information"
                  color="blue"
                  variant="light"
                  icon={<IconInfoCircle size={16} />}
                >
                  By approving this request, you confirm that the employee's salary will be paid
                  into their DailyPay virtual account going forward.
                </Alert>

                <Stack gap="md">
                  <Checkbox
                    label="Confirm that salaries are usually paid by the 3rd of next month latest"
                    checked={approvalData.salaryPaidBy3rd}
                    onChange={(event) =>
                      handleApprovalChange('salaryPaidBy3rd', event.currentTarget.checked)
                    }
                    size="md"
                  />

                  <Checkbox
                    label="Confirm that this employee currently works in the organisation"
                    checked={approvalData.employeeCurrentlyWorks}
                    onChange={(event) =>
                      handleApprovalChange('employeeCurrentlyWorks', event.currentTarget.checked)
                    }
                    size="md"
                  />

                  <Checkbox
                    label="Confirm that employee salaries would be paid into the dedicated DailyPay virtual accounts going forward"
                    checked={approvalData.salaryToDailyPayAccount}
                    onChange={(event) =>
                      handleApprovalChange('salaryToDailyPayAccount', event.currentTarget.checked)
                    }
                    size="md"
                  />

                  <Checkbox
                    label="Confirm that DailyPay will be notified first if the employee wants to change the salary account subsequently"
                    checked={approvalData.notifyDailyPayFirst}
                    onChange={(event) =>
                      handleApprovalChange('notifyDailyPayFirst', event.currentTarget.checked)
                    }
                    size="md"
                  />

                  <Checkbox
                    label="Accept that DailyPay becomes the representative of the employee"
                    checked={approvalData.acceptRepresentation}
                    onChange={(event) =>
                      handleApprovalChange('acceptRepresentation', event.currentTarget.checked)
                    }
                    size="md"
                  />

                  <Checkbox
                    label="Agree to copy DailyPay in emails when employee is being fired, fined, or anything affecting financial performance"
                    checked={approvalData.copyOnTermination}
                    onChange={(event) =>
                      handleApprovalChange('copyOnTermination', event.currentTarget.checked)
                    }
                    size="md"
                  />
                </Stack>

                <Divider />

                <Stack gap="md">
                  <Text size="sm" fw={500}>
                    Additional Comments (Optional)
                  </Text>
                  <Textarea
                    placeholder="Any additional comments or special instructions..."
                    rows={3}
                    value={additionalComment}
                    onChange={(event) => setAdditionalComment(event.currentTarget.value)}
                  />
                </Stack>

                <Group justify="space-between" pt="md">
                  <Button variant="outline" color="gray" leftSection={<IconMail size={16} />}>
                    Contact Support
                  </Button>

                  <Button
                    size="lg"
                    color="green"
                    leftSection={<IconCheck size={20} />}
                    onClick={handleApprove}
                    disabled={!Object.values(approvalData).every((value) => value) || isLoading}
                  >
                    {isLoading ? 'Approving...' : 'Approve DailyPay Access'}
                  </Button>
                </Group>
              </Stack>
            </Card>
          </GridCol>
        </Grid>

        {/* Process Timeline */}
        <Box mt={80}>
          <Title ta="center" size={rem(28)} fw={400} c="#0b4650" mb={40}>
            What Happens Next?
          </Title>

          <Timeline active={isApproved ? 3 : 1} bulletSize={24} lineWidth={2}>
            <TimelineItem bullet={<IconCheck size={12} />} title="HR Approval">
              <Text size="sm" c="gray.6" mt={4}>
                HR reviews and approves the employee's DailyPay request
              </Text>
            </TimelineItem>

            <TimelineItem bullet={<IconMail size={12} />} title="Employee Notification">
              <Text size="sm" c="gray.6" mt={4}>
                Employee receives email and in-app notification of approval
              </Text>
            </TimelineItem>

            <TimelineItem bullet={<IconWallet size={12} />} title="DailyPay Activation">
              <Text size="sm" c="gray.6" mt={4}>
                Employee can start earning and claiming daily wages immediately
              </Text>
            </TimelineItem>

            <TimelineItem bullet={<IconCircleCheck size={12} />} title="Daily Earnings">
              <Text size="sm" c="gray.6" mt={4}>
                Employee receives daily notifications and can claim earned wages
              </Text>
            </TimelineItem>
          </Timeline>
        </Box>
      </Container>

      <SuccessModal />
    </>
  );
}
