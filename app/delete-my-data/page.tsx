import {
  IconShieldLock,
  IconTrash,
  IconUserOff,
  IconAlertCircle,
  IconClipboardCheck,
} from '@tabler/icons-react';
import {
  Container,
  Grid,
  Card,
  Text,
  Title,
  List,
  ThemeIcon,
  Button,
  Stack,
  rem,
  Timeline,
  Alert,
  GridCol,
  TimelineItem,
  ListItem,
} from '@mantine/core';
import PageHeaderSection from '@/components/Sections/PageHeaderSection';
import classes from './page.module.css';
import { DeleteDataForm } from '@/components/Forms/DeleteDataForm';

const deletionSteps = [
  {
    title: 'Request Submission',
    description: 'Submit your data deletion request through our secure form',
    icon: IconShieldLock,
  },
  {
    title: 'Verification',
    description: 'We verify your identity to ensure data security',
    icon: IconClipboardCheck,
  },
  {
    title: 'Data Removal',
    description: 'Your data is permanently deleted from our systems',
    icon: IconTrash,
  },
  {
    title: 'Confirmation',
    description: 'You receive confirmation once deletion is complete',
    icon: IconUserOff,
  },
];

export default function DeleteMyDataPage() {
  return (
    <>
      <PageHeaderSection
        title="Request Data Deletion"
        caption="Learn about our data deletion process and submit your request"
        badge="Privacy"
      />

      <Container size="lg" py={80}>
        <Grid gutter={40}>
          <GridCol span={{ base: 12, md: 8 }}>
            <Stack gap="xl">
              <div>
                <Title order={2} className={classes.sectionTitle}>
                  Data Deletion Process
                </Title>
                <Text size="lg" c="dimmed" mb="xl">
                  We take your privacy seriously. Follow these steps to request deletion of your personal data.
                </Text>

                <Timeline active={1} bulletSize={32} lineWidth={2}>
                  {deletionSteps.map((step, index) => (
                    <TimelineItem
                      key={index}
                      bullet={
                        <ThemeIcon size={32} radius="xl" color="blue">
                          <step.icon style={{ width: rem(18), height: rem(18) }} />
                        </ThemeIcon>
                      }
                      title={step.title}
                    >
                      <Text size="sm" mt={4}>
                        {step.description}
                      </Text>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>

              <Alert
                variant="light"
                color="blue"
                title="Important Information"
                icon={<IconAlertCircle />}
              >
                <List spacing="xs" size="sm">
                  <ListItem>The process typically takes 30 days to complete</ListItem>
                  <ListItem>Some data may be retained for legal requirements</ListItem>
                  <ListItem>Deletion is permanent and cannot be undone</ListItem>
                  <ListItem>Your account will be permanently closed</ListItem>
                </List>
              </Alert>

              <Card withBorder radius="md" className={classes.formCard}>
                <Title order={3} mb="lg">
                  Submit Deletion Request
                </Title>
                <Text c="dimmed" mb="xl">
                  Please fill out the form below to submit your data deletion request. We will verify your 
                  identity before processing the request.
                </Text>
                <DeleteDataForm />
              </Card>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 4 }}>
            <Card withBorder radius="md" className={classes.infoCard}>
              <Title order={3} mb="lg">
                What data will be deleted?
              </Title>
              <List spacing="md">
                <ListItem>Personal information</ListItem>
                <ListItem>Account details</ListItem>
                <ListItem>Transaction history</ListItem>
                <ListItem>Usage data</ListItem>
                <ListItem>Preferences and settings</ListItem>
                <ListItem>Communication history</ListItem>
              </List>

              <Title order={3} mt={40} mb="lg">
                Need Help?
              </Title>
              <Text size="sm" c="dimmed" mb="md">
                If you have questions about the data deletion process, please contact our support team.
              </Text>
              <Button variant="light" fullWidth component="a" href="/contact">
                Contact Support
              </Button>
            </Card>
          </GridCol>
        </Grid>
      </Container>
    </>
  );
}
