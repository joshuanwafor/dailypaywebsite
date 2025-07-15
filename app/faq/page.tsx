
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
      question: 'What is DailyPay by Alerts?',
      answer:
        'DailyPay by Alerts is a fintech platform that allows Nigerian workers to access their earned wages daily, instead of waiting until month-end. We partner with employers to provide zero-interest early wage access to employees.',
    },
    {
      question: 'Is DailyPay free to use?',
      answer:
        'Yes, DailyPay is completely free for employees. There are no interest charges, hidden fees, or subscription costs. Your employer covers all processing fees.',
    },
    {
      question: 'How does DailyPay work?',
      answer:
        'Once your employer partners with us, you can access up to 50% of your earned wages daily through our mobile app. The accessed amount is automatically deducted from your next salary payment.',
    },
    {
      question: 'Is DailyPay safe and secure?',
      answer:
        'Yes, we use bank-level security protocols, including 256-bit SSL encryption and are fully compliant with Nigerian financial regulations. Your personal and financial data is completely protected.',
    },
    {
      question: 'What happens if I change jobs?',
      answer:
        'Your DailyPay account remains active. You can simply update your employment details once your new employer partners with us, or you can close your account at any time.',
    },
  ],
  eligibility: [
    {
      question: 'Who can use DailyPay?',
      answer:
        'Any Nigerian worker whose employer has partnered with DailyPay can use our service. You must have a valid BVN, bank account, and employment confirmation from your HR department.',
    },
    {
      question: 'Do I need a minimum salary to qualify?',
      answer:
        'There\'s no minimum salary requirement. However, you must have worked for at least one complete pay period with your current employer before accessing daily wages.',
    },
    {
      question: 'Can part-time employees use DailyPay?',
      answer:
        'Yes, part-time employees can use DailyPay as long as their employer is partnered with us and they meet the basic verification requirements.',
    },
    {
      question: 'What documents do I need to verify my account?',
      answer:
        'You need a valid Nigerian ID (National ID, Driver\'s License, or International Passport), BVN, bank account details, and employment verification from your HR department.',
    },
  ],
  limits: [
    {
      question: 'How much can I access daily?',
      answer:
        'You can access up to 50% of your earned wages for the current pay period. The exact amount depends on your daily earnings and what you\'ve already accessed.',
    },
    {
      question: 'Is there a daily limit?',
      answer:
        'The daily limit is based on your earned wages. You cannot access more than what you\'ve actually earned, up to a maximum of 50% of your total monthly salary.',
    },
    {
      question: 'Can I increase my access limit?',
      answer:
        'Limits are set based on your salary and employment status. As you build a good history with DailyPay, some limits may be adjusted, but the 50% rule always applies.',
    },
    {
      question: 'What if I need more than my daily limit?',
      answer:
        'DailyPay is designed for daily expenses, not large purchases. If you need more than your earned wages, consider traditional lending options or speak with your employer about a salary advance.',
    },
  ],
  technical: [
    {
      question: 'Which banks are supported?',
      answer:
        'We support all major Nigerian banks including GTBank, Access Bank, First Bank, UBA, Zenith Bank, and many others. You can also receive funds through virtual accounts.',
    },
    {
      question: 'How fast are transfers?',
      answer:
        'Transfers are typically instant during business hours (7 AM - 7 PM). Outside business hours, transfers may take up to 2 hours depending on your bank.',
    },
    {
      question: 'Is there a mobile app?',
      answer:
        'Yes, we have mobile apps for both Android and iOS. You can download them from Google Play Store or Apple App Store by searching "DailyPay by Alerts".',
    },
    {
      question: 'What if the app is not working?',
      answer:
        'If you experience technical issues, first try updating the app or restarting your phone. If problems persist, contact our support team at support@alerts.africa.',
    },
  ],
};

const categories = [
  { title: 'General', icon: IconQuestionMark, color: 'blue' },
  { title: 'Eligibility', icon: IconUsers, color: 'green' },
  { title: 'Limits', icon: IconCreditCard, color: 'violet' },
  { title: 'Technical', icon: IconDeviceLaptop, color: 'teal' },
];

export default function FAQPage() {
  return (
    <>
      <PageHeaderSection
        title="Frequently Asked Questions"
        caption="Find answers to common questions about DailyPay services"
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
                Can't find the answer you're looking for? Our support team is here to help.
              </Text>
            </div>
          </Group>
          <Group mt="xl">
            <Button component="a" href="/contact" size="md" bg="#0b4650">
              Contact Support
            </Button>
            <Button component="a" href="mailto:support@alerts.africa" variant="light" size="md" color="#0b4650">
              Email Us
            </Button>
          </Group>
        </Card>
      </Container>
    </>
  );
}
