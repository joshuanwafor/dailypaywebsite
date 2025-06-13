
import {
  IconCreditCard,
  IconDeviceLaptop,
  IconMessageCircle,
  IconQuestionMark,
  IconReceipt,
  IconSettings,
  IconUsers,
} from '@tabler/icons-react';
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Badge,
  Button,
  Card,
  Container,
  Grid,
  GridCol,
  Group,
  rem,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import PageHeaderSection from '@/components/Sections/PageHeaderSection';
import classes from './page.module.css';

const faqs = {
  general: [
    {
      question: 'What is Shopkeeper POS?',
      answer:
        'Shopkeeper POS is a modern point of sale software designed for retail stores and hospitality businesses. It offers comprehensive features including sales management, inventory control, customer management, and detailed reporting.',
    },
    {
      question: 'Is Shopkeeper free to use?',
      answer:
        "Shopkeeper offers a 14-day free trial period with full functionality. After the trial period, you'll need to purchase a license to continue using the software.",
    },
    {
      question: 'Can I use Shopkeeper offline?',
      answer:
        "Yes, Shopkeeper works offline. Internet connection is only required for initial activation and synchronization if you're using multiple devices.",
    },
    {
      question: 'Do you offer technical support?',
      answer:
        'Yes, we provide technical support through our help center, email, and community forums. Professional license holders get priority support.',
    },
  ],
  technical: [
    {
      question: 'What are the system requirements?',
      answer:
        'Shopkeeper requires Windows 10 or newer, 2GB RAM (4GB recommended), 1024x768 screen resolution, and .NET Framework 4.8.',
    },
    {
      question: 'Can I migrate data from another POS system?',
      answer:
        'Yes, Shopkeeper supports data import from CSV files. We also offer professional data migration services for seamless transition.',
    },
    {
      question: 'How are updates handled?',
      answer:
        'Shopkeeper automatically checks for updates and notifies you when new versions are available. Updates can be installed with a single click.',
    },
  ],
  payments: [
    {
      question: 'Which payment methods are supported?',
      answer:
        'Shopkeeper supports cash, credit cards, mobile payments, and custom payment methods. Integration with popular payment processors is available.',
    },
    {
      question: 'Can I process split payments?',
      answer:
        'Yes, you can split payments between multiple payment methods and handle partial payments easily.',
    },
  ],
  mobile: [
    {
      question: 'Is there a mobile app available?',
      answer:
        'Yes, Shopkeeper offers mobile apps for both Android and iOS devices, allowing you to manage your business on the go.',
    },
    {
      question: 'How does the mobile app sync with the desktop version?',
      answer:
        'The mobile app automatically syncs with your desktop installation when connected to the internet, ensuring data consistency across all devices.',
    },
  ],
};

const categories = [
  { title: 'General', icon: IconQuestionMark, color: 'blue' },
  { title: 'Technical', icon: IconDeviceLaptop, color: 'teal' },
  { title: 'Payments', icon: IconCreditCard, color: 'violet' },
  { title: 'Mobile App', icon: IconDeviceLaptop, color: 'grape' },
];

export default function FAQPage() {
  return (
    <>
      <PageHeaderSection
        title="Frequently Asked Questions"
        caption="Find answers to common questions about Shopkeeper POS software"
        badge="FAQ"
      />

      <Container size="lg" py={80}>
        <Grid gutter={40}>
          {categories.map((category) => (
            <GridCol key={category.title} span={{ base: 12, xs: 6, md: 3 }}>
              <Card withBorder radius="md" className={classes.categoryCard}>
                <ThemeIcon
                  size={50}
                  radius="md"
                  color={category.color}
                  className={classes.categoryIcon}
                >
                  <category.icon style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
                </ThemeIcon>
                <Text fz="lg" fw={500} mt="md">
                  {category.title}
                </Text>
              </Card>
            </GridCol>
          ))}
        </Grid>

        <Stack mt={80}>
          {Object.entries(faqs).map(([category, items]) => (
            <div key={category} className={classes.section}>
              <Title order={2} mb="lg" className={classes.sectionTitle}>
                {category.charAt(0).toUpperCase() + category.slice(1)} Questions
              </Title>
              <Accordion variant="separated">
                {items.map((item, index) => (
                  <AccordionItem key={index} value={`${category}-${index}`}>
                    <AccordionControl>
                      <Text fw={500}>{item.question}</Text>
                    </AccordionControl>
                    <AccordionPanel>
                      <Text c="dimmed">{item.answer}</Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </Stack>

        <Card withBorder radius="md" className={classes.contactCard} mt={80}>
          <Group>
            <ThemeIcon size={56} radius="md" className={classes.contactIcon}>
              <IconMessageCircle style={{ width: rem(32), height: rem(32) }} />
            </ThemeIcon>
            <div>
              <Text fz="lg" fw={500}>
                Still have questions?
              </Text>
              <Text size="sm" c="dimmed" mt={4}>
                Can't find the answer you're looking for? Contact our support team.
              </Text>
            </div>
          </Group>
          <Group mt="xl">
            <Button component="a" href="/contact" size="md">
              Contact Support
            </Button>
            <Button component="a" href="/documentation" variant="light" size="md">
              View Documentation
            </Button>
          </Group>
        </Card>
      </Container>
    </>
  );
}
