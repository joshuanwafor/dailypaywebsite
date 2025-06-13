'use client';

import {
  IconAward,
  IconBuilding,
  IconCheck,
  IconHeart,
  IconShield,
  IconStar,
  IconTarget,
  IconTrendingUp,
  IconUsers,
  IconWallet,
  IconClock,
  IconCurrency,
  IconPhone,
  IconMail,
  IconChevronRight,
  IconArrowRight,
  IconDeviceAnalytics,
  IconCreditCard,
  IconLock,
  IconCashBanknote,
  IconCalendar,
  IconIdBadge2,
  IconBusinessplan,
} from '@tabler/icons-react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  rem,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  List,
  ListItem,
  Timeline,
  TimelineItem,
  Paper,
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
} from '@mantine/core';
import PageHeaderSection from '@/components/Sections/PageHeaderSection';

const steps = [
  {
    step: '01',
    title: 'Create Account & Verify Identity',
    description: 'Sign up with your email address and complete our secure KYC verification process using your BVN (Bank Verification Number). This ensures full compliance with Nigerian financial regulations.',
    icon: IconUsers,
    time: '2-3 minutes',
    details: [
      'Provide basic personal information (name, email, phone)',
      'Verify your BVN for identity confirmation',
      'Upload a valid government-issued ID (National ID, Driver\'s License, or Passport)',
      'Take a quick selfie for biometric verification',
      'Receive instant verification confirmation'
    ],
    requirements: ['Valid BVN', 'Government-issued ID', 'Nigerian phone number', 'Active email address']
  },
  {
    step: '02',
    title: 'HR Department Integration',
    description: 'Your HR department sets up salary payments to your dedicated DailyPay virtual account. This secure integration allows us to track your daily earnings in real-time.',
    icon: IconBuilding,
    time: '1-3 business days',
    details: [
      'Share your unique DailyPay employee code with HR',
      'HR department creates a dedicated virtual account for you',
      'Your daily wage calculations are automatically computed',
      'Secure API integration with payroll systems',
      'Real-time synchronization of work hours and earnings'
    ],
    requirements: ['HR department approval', 'Company partnership with DailyPay', 'Valid employment contract', 'Payroll system integration']
  },
  {
    step: '03',
    title: 'Start Accessing Daily Wages',
    description: 'Once everything is set up, you can start accessing your earned wages daily. Get notifications about available funds and transfer money instantly to any Nigerian bank account.',
    icon: IconTrendingUp,
    time: 'Immediate access',
    details: [
      'Receive daily notifications of earned wages',
      'View your available balance in the mobile app',
      'Transfer funds instantly to your preferred bank account',
      'Track your withdrawal history and patterns',
      'Set up automatic transfers or manual withdrawals'
    ],
    requirements: ['Active bank account', 'DailyPay mobile app', 'Completed work hours', 'Minimum withdrawal amount met']
  },
];

const features = [
  {
    icon: IconCurrency,
    title: 'Zero Interest & Fees',
    description: 'No interest charges, no hidden fees, no surprises. What you earn is exactly what you receive.',
    highlight: '0% Interest'
  },
  {
    icon: IconClock,
    title: 'Instant Transfers',
    description: 'Transfer your earned wages to any Nigerian bank account within seconds, 24/7.',
    highlight: 'Real-time'
  },
  {
    icon: IconShield,
    title: 'Bank-Level Security',
    description: 'Enterprise-grade encryption and full regulatory compliance for complete peace of mind.',
    highlight: 'Fully Secure'
  },
  {
    icon: IconDeviceAnalytics,
    title: 'Smart Analytics',
    description: 'Track your earning patterns, spending habits, and financial goals with detailed insights.',
    highlight: 'AI-Powered'
  }
];

const faqs = [
  {
    question: 'How much of my salary can I access daily?',
    answer: 'You can access up to 50% of your earned wages for any given day. For example, if you earn ₦5,000 per day, you can withdraw up to ₦2,500 daily through DailyPay.'
  },
  {
    question: 'What happens if I change jobs?',
    answer: 'Simply update your employment information in the app and have your new HR department complete the integration process. Your account remains active and all your transaction history is preserved.'
  },
  {
    question: 'Are there any limits on withdrawals?',
    answer: 'The minimum withdrawal amount is ₦500 per transaction. The maximum depends on your earned wages for that period. There are no monthly limits as long as you have earned wages available.'
  },
  {
    question: 'How does DailyPay calculate my daily earnings?',
    answer: 'We integrate directly with your company\'s payroll system to track your work hours and calculate daily earnings based on your salary. This ensures 100% accuracy and transparency.'
  },
  {
    question: 'What if my company doesn\'t use DailyPay yet?',
    answer: 'You can refer DailyPay to your HR department. We offer free integration and setup for companies. Our business development team will handle the entire onboarding process.'
  },
  {
    question: 'Is my financial data safe with DailyPay?',
    answer: 'Absolutely. We use bank-level encryption, are fully licensed by the CBN, and comply with all Nigerian financial regulations. Your data is never shared with third parties without your consent.'
  }
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeaderSection
        title="How It Works"
        caption="Empowering African workers with daily access to their earned wages"
        badge="How It Works"
      />

      <Container size="lg" py={80}>
        {/* Introduction */}
        <Stack align="center" gap="lg" mb={80}>
          <Text size="sm" tt="uppercase" fw={500} c="gray.6">
            Simple 3-step process
          </Text>
          <Title ta="center" size={rem(36)} fw={400} c="#0b4650" maw={600}>
            Get started with DailyPay in 
            <Text component="span" fw={600} c="#329aae"> minutes, not days</Text>
          </Title>
          <Text ta="center" size="lg" c="gray.7" maw={550} lh={1.6} fw={300}>
            Our streamlined process is designed to get you accessing your daily wages 
            as quickly as possible while maintaining the highest security standards.
          </Text>
          <Divider w={60} size="sm" color="#329aae" />
        </Stack>

        {/* Steps Timeline */}
        <Timeline active={3} bulletSize={60} lineWidth={3} color="#329aae" mb={80}>
          {steps.map((step, index) => (
            <Timeline.Item
              key={index}
              bullet={
                <ThemeIcon size={60} radius="xl" color="#0b4650">
                  <step.icon size={28} />
                </ThemeIcon>
              }
              title={
                <Group gap="md" mb="sm">
                  <Badge size="lg" variant="filled" color="#329aae" radius="sm">
                    {step.step}
                  </Badge>
                  <Title order={3} fw={500} c="#0b4650">
                    {step.title}
                  </Title>
                  <Badge size="sm" variant="light" color="green">
                    {step.time}
                  </Badge>
                </Group>
              }
            >
              <Grid mt="md">
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Stack gap="md">
                    <Text size="md" c="gray.7" lh={1.6} fw={300}>
                      {step.description}
                    </Text>
                    
                    <Card p="md" bg="gray.0" radius="md">
                      <Stack gap="xs">
                        <Text size="sm" fw={600} c="#0b4650" mb="xs">
                          What you'll need:
                        </Text>
                        {step.requirements.map((req, reqIndex) => (
                          <Group key={reqIndex} gap="sm">
                            <ThemeIcon size="sm" color="#329aae" variant="light" radius="xl">
                              <IconCheck size={12} />
                            </ThemeIcon>
                            <Text size="sm" c="gray.7">
                              {req}
                            </Text>
                          </Group>
                        ))}
                      </Stack>
                    </Card>
                  </Stack>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Card p="lg" bg="white" shadow="sm" radius="lg" h="100%">
                    <Stack gap="md">
                      <Text size="sm" fw={600} c="#0b4650" mb="xs">
                        Detailed process:
                      </Text>
                      <List 
                        spacing="sm"
                        size="sm"
                        icon={
                          <ThemeIcon size="sm" color="#329aae" variant="light" radius="xl">
                            <IconArrowRight size={12} />
                          </ThemeIcon>
                        }
                      >
                        {step.details.map((detail, detailIndex) => (
                          <List.Item key={detailIndex}>
                            <Text size="sm" c="gray.7">
                              {detail}
                            </Text>
                          </List.Item>
                        ))}
                      </List>
                    </Stack>
                  </Card>
                </Grid.Col>
              </Grid>
            </Timeline.Item>
          ))}
        </Timeline>

        {/* Key Features */}
        <Stack align="center" gap="lg" mb={60}>
          <Text size="sm" tt="uppercase" fw={500} c="gray.6">
            Why choose DailyPay?
          </Text>
          <Title ta="center" size={rem(32)} fw={400} c="#0b4650" maw={600}>
            Built with Nigerian workers in mind
          </Title>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl" mb={80}>
          {features.map((feature, index) => (
            <Card key={index} p="xl" shadow="sm" radius="lg" h="100%" bg="white" style={{ border: '1px solid #f1f3f4' }}>
              <Stack gap="md" align="center" ta="center">
                <ThemeIcon size={70} radius="xl" variant="light" color="#0b4650">
                  <feature.icon size={32} />
                </ThemeIcon>
                <Badge size="sm" variant="dot" color="#329aae">
                  {feature.highlight}
                </Badge>
                <Title order={4} size="lg" fw={500} c="#0b4650">
                  {feature.title}
                </Title>
                <Text c="gray.7" size="sm" lh={1.6}>
                  {feature.description}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>

        {/* Requirements Section */}
        <Card p="xl" bg="gray.0" radius="lg" mb={80}>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="md">
                <Group>
                  <ThemeIcon size={50} color="#0b4650" variant="light" radius="xl">
                    <IconIdBadge2 size={24} />
                  </ThemeIcon>
                  <Title order={3} fw={500} c="#0b4650">
                    Eligibility Requirements
                  </Title>
                </Group>
                <Text c="gray.7" size="md" lh={1.6}>
                  To use DailyPay, you must meet these basic requirements:
                </Text>
                <List 
                  spacing="sm"
                  icon={
                    <ThemeIcon size="sm" color="#329aae" variant="light" radius="xl">
                      <IconCheck size={12} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <Text size="sm">Be 18 years or older</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="sm">Have a valid BVN (Bank Verification Number)</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="sm">Be employed by a DailyPay partner company</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="sm">Have a Nigerian bank account</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="sm">Earn a minimum of ₦30,000 monthly</Text>
                  </List.Item>
                </List>
              </Stack>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="md">
                <Group>
                  <ThemeIcon size={50} color="#329aae" variant="light" radius="xl">
                    <IconBusinessplan size={24} />
                  </ThemeIcon>
                  <Title order={3} fw={500} c="#0b4650">
                    For Employers
                  </Title>
                </Group>
                <Text c="gray.7" size="md" lh={1.6}>
                  Companies can easily integrate DailyPay into their benefits package:
                </Text>
                <List 
                  spacing="sm"
                  icon={
                    <ThemeIcon size="sm" color="#329aae" variant="light" radius="xl">
                      <IconCheck size={12} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <Text size="sm">Free integration and setup</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="sm">No upfront costs or monthly fees</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="sm">Seamless payroll system integration</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="sm">Improved employee satisfaction and retention</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="sm">Detailed analytics and reporting</Text>
                  </List.Item>
                </List>
              </Stack>
            </Grid.Col>
          </Grid>
        </Card>

        {/* FAQ Section */}
        <Stack align="center" gap="lg" mb={60}>
          <Text size="sm" tt="uppercase" fw={500} c="gray.6">
            Common questions
          </Text>
          <Title ta="center" size={rem(32)} fw={400} c="#0b4650" maw={600}>
            Frequently Asked Questions
          </Title>
          <Text ta="center" size="md" c="gray.7" maw={550} lh={1.6}>
            Have questions about how DailyPay works? Find answers to the most common questions below.
          </Text>
        </Stack>

        <Accordion variant="separated" radius="md" mb={80}>
          {faqs.map((faq, index) => (
            <Accordion.Item key={index} value={index.toString()}>
              <Accordion.Control>
                <Text size="md" fw={500} c="#0b4650">
                  {faq.question}
                </Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm" c="gray.7" lh={1.6}>
                  {faq.answer}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>

        {/* CTA Section */}
        <Card p="xl" bg="#0b4650" radius="lg">
          <Stack align="center" gap="lg" ta="center">
            <Title order={2} c="white" fw={400}>
              Ready to start accessing your daily wages?
            </Title>
            <Text c="gray.3" size="lg" maw={500} lh={1.6}>
              Join thousands of Nigerian workers who have already transformed their financial freedom with DailyPay.
            </Text>
            <Group gap="md" mt="md">
              <Button 
                size="xl" 
                bg="#329aae"
                rightSection={<IconArrowRight size={20} />}
                radius="xl"
                fw={600}
                px="xl"
                h={56}
              >
                Get Started Now
              </Button>
              <Button 
                size="xl" 
                variant="outline" 
                color="white"
                leftSection={<IconPhone size={20} />}
                radius="xl"
                fw={400}
                px="xl"
                h={56}
              >
                Schedule Demo
              </Button>
            </Group>
          </Stack>
        </Card>
      </Container>
    </>
  );
}
