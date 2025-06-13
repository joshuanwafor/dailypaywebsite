'use client';

import { useState } from 'react';
import {
  IconBrandAndroid,
  IconBrandApple,
  IconBrowser,
  IconBuilding,
  IconBuildingSkyscraper,
  IconBuildingStore,
  IconChartBar,
  IconCheck,
  IconDeviceAnalytics,
  IconDeviceLaptop,
  IconDeviceMobile,
  IconDownload,
  IconFileDownload,
  IconHistory,
  IconInfoCircle,
  IconServer,
  IconUsers,
  IconX,
} from '@tabler/icons-react';
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  List,
  rem,
  Stack,
  Switch,
  Tabs,
  Text,
  ThemeIcon,
  Title,
  Tooltip,
} from '@mantine/core';
import PageHeaderSection from '@/components/Sections/PageHeaderSection';
import {
  DOWNLOAD_SHOPKEEPER_APK_URL,
  DOWNLOAD_SHOPKEEPER_WINDOWS_URL,
  SHOPKEEPER_WEBAPP_URL,
} from '@/utils/constants';
import classes from './page.module.css';

enum PlanTier {
  BASIC = 'BASIC',
  PREMIUM = 'PREMIUM',
  ENTERPRISE = 'ENTERPRISE',
}

const features = {
  [PlanTier.BASIC]: [
    {
      name: 'Web, Mobile & Desktop App Access',
      enabled: true,
      limit: null,
      description: 'Access via web browser, mobile apps, and desktop application.',
    },
    {
      name: 'Inventory Management',
      enabled: true,
      limit: 1000,
      description: 'Track up to 1000 distinct inventory items.',
    },
    {
      name: 'Sales Tracking',
      enabled: true,
      limit: 1000,
      description: 'Record up to 1000 sales transactions per month.',
    },
    {
      name: 'Expense Management',
      enabled: true,
      limit: null,
      description: 'Track business expenses.',
    },
    {
      name: 'Invoice Creation',
      enabled: true,
      limit: 100,
      description: 'Create up to 100 invoices per month.',
    },
    {
      name: 'Basic Customer Management',
      enabled: true,
      limit: 500,
      description: 'Manage up to 500 customer profiles.',
    },
    {
      name: 'Payment Transaction History',
      enabled: true,
      limit: null,
      description: 'View history within storage limits.',
    },
    {
      name: 'Basic Reporting',
      enabled: true,
      limit: null,
      description: 'Access standard sales and expense reports.',
    },
    {
      name: 'Staff Accounts',
      enabled: true,
      limit: 3,
      description: 'Includes owner + 2 additional staff accounts.',
    },
    {
      name: 'Record Storage',
      enabled: true,
      limit: 6,
      description:
        '6 months history for Sales, Expenses, Transactions, Inventory Movements, Quotes.',
    },
    { name: 'Standard Support', enabled: true, limit: null, description: 'Email support.' },
  ],
  [PlanTier.PREMIUM]: [
    {
      name: 'Web, Mobile & Desktop App Access',
      enabled: true,
      limit: null,
      description: 'Access via web browser, mobile apps, and desktop application.',
    },
    {
      name: 'Inventory Management',
      enabled: true,
      limit: 5000,
      description: 'Track up to 5000 distinct inventory items.',
    },
    {
      name: 'Sales Tracking',
      enabled: true,
      limit: 5000,
      description: 'Record up to 5000 sales transactions per month.',
    },
    {
      name: 'Expense Management',
      enabled: true,
      limit: null,
      description: 'Track business expenses.',
    },
    {
      name: 'Invoice Creation',
      enabled: true,
      limit: 500,
      description: 'Create up to 500 invoices per month.',
    },
    {
      name: 'Advanced Customer Management',
      enabled: true,
      limit: 5000,
      description: 'Manage up to 5000 customer profiles with custom fields.',
    },
    {
      name: 'Payment Transaction History',
      enabled: true,
      limit: null,
      description: 'View full history (unlimited storage duration).',
    },
    {
      name: 'Advanced Reporting',
      enabled: true,
      limit: null,
      description: 'Access customizable reports and deeper analytics.',
    },
    {
      name: 'Notifications & Alerts',
      enabled: true,
      limit: null,
      description: 'Customizable alerts (e.g., low stock, overdue invoices).',
    },
    {
      name: 'Staff Accounts',
      enabled: true,
      limit: 10,
      description: 'Includes owner + 9 additional staff accounts.',
    },
    {
      name: 'Record Storage',
      enabled: true,
      limit: null,
      description:
        'Unlimited history ("Pro Plan") for Sales, Expenses, Transactions, Inventory Movements, Quotes.',
    },
    {
      name: 'Priority Support',
      enabled: true,
      limit: null,
      description: 'Priority email & chat support.',
    },
  ],
  [PlanTier.ENTERPRISE]: [
    {
      name: 'Web, Mobile & Desktop App Access',
      enabled: true,
      limit: null,
      description: 'Access via web browser, mobile apps, and desktop application.',
    },
    {
      name: 'Inventory Management',
      enabled: true,
      limit: null,
      description: 'Unlimited inventory items.',
    },
    {
      name: 'Sales Tracking',
      enabled: true,
      limit: null,
      description: 'Unlimited sales transactions.',
    },
    {
      name: 'Expense Management',
      enabled: true,
      limit: null,
      description: 'Track business expenses.',
    },
    { name: 'Invoice Creation', enabled: true, limit: null, description: 'Unlimited invoices.' },
    {
      name: 'Comprehensive Customer Management',
      enabled: true,
      limit: null,
      description: 'Unlimited customers with advanced segmentation.',
    },
    {
      name: 'Payment Transaction History',
      enabled: true,
      limit: null,
      description: 'View full history (unlimited storage duration).',
    },
    {
      name: 'Comprehensive Reporting',
      enabled: true,
      limit: null,
      description: 'Advanced analytics, custom dashboards, API access for reporting.',
    },
    {
      name: 'Notifications & Alerts',
      enabled: true,
      limit: null,
      description: 'Customizable alerts with advanced workflow integration.',
    },
    {
      name: 'Staff Accounts',
      enabled: true,
      limit: null,
      description: 'Unlimited staff accounts with role-based permissions.',
    },
    {
      name: 'Record Storage',
      enabled: true,
      limit: null,
      description:
        'Unlimited history for Sales, Expenses, Transactions, Inventory Movements, Quotes.',
    },
    {
      name: 'Dedicated Support',
      enabled: true,
      limit: null,
      description: 'Dedicated account manager & priority phone/email/chat support.',
    },
  ],
};

const plans = [
  {
    tier: PlanTier.BASIC,
    name: 'Basic',
    description: 'For small retail stores',
    monthlyPrice: 3000,
    yearlyPrice: 36000,
    color: 'blue',
    icon: IconBuildingStore,
    popular: false,
  },
  {
    tier: PlanTier.PREMIUM,
    name: 'Premium',
    description: 'For growing businesses',
    monthlyPrice: 5000,
    yearlyPrice: 60000,
    color: 'violet',
    icon: IconChartBar,
    popular: true,
  },
  {
    tier: PlanTier.ENTERPRISE,
    name: 'Enterprise',
    description: 'For large retail chains',
    monthlyPrice: 12000,
    yearlyPrice: 144000,
    color: 'grape',
    icon: IconBuildingSkyscraper,
    popular: false,
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <Box bg="gray.0" py={50}>
        <Container size="lg">
          <Stack align="center" gap="xl">
            <Badge variant="filled" size="lg" radius="xl">
              Pricing
            </Badge>
            <Title order={1} ta="center" size="h1">
              Choose Your Plan
            </Title>
            <Text c="dimmed" ta="center" maw={600} size="lg">
              All plans include a 14-day free trial. No credit card required. Pricing is per
              business location.
            </Text>

            <Group gap="xs" mt="md">
              <Text size="sm">Monthly</Text>
              <Switch
                checked={yearly}
                onChange={(event) => setYearly(event.currentTarget.checked)}
                size="md"
                color="blue"
              />
              <Text size="sm">Yearly</Text>
            </Group>
          </Stack>
        </Container>
      </Box>

      <Container size="lg" py="xl">
        <Grid gutter={40}>
          {plans.map((plan) => (
            <Grid.Col key={plan.name} span={{ base: 12, sm: 6, md: 4 }}>
              <Card
                withBorder
                radius="xl"
                className={classes.planCard}
                padding="xl"
                style={{
                  borderColor: plan.popular ? `var(--mantine-color-${plan.color}-6)` : undefined,
                }}
              >
                <Stack>
                  <Group>
                    <ThemeIcon size={44} radius="xl" color={plan.color} variant="light">
                      <plan.icon style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
                    </ThemeIcon>
                    <div>
                      <Text fz={24} fw={700}>
                        {plan.name}
                      </Text>
                      <Text c="dimmed" size="sm">
                        {plan.description}
                      </Text>
                    </div>
                  </Group>

                  <Group mt="md">
                    <Title fz={42}  style={{ lineHeight: 1 }}>
                      {plan.monthlyPrice === 0
                        ? 'Free'
                        : new Intl.NumberFormat('en-NG', {
                            style: 'currency',
                            currency: 'NGN',
                          }).format(yearly ? plan.yearlyPrice : plan.monthlyPrice)}
                    </Title>
                    {plan.monthlyPrice > 0 && (
                      <Box>
                        <Text fz="sm" c="dimmed" style={{ lineHeight: 1 }}>
                          {yearly ? 'per year' : 'per month'}
                        </Text>
                        <Text fz="xs" c="dimmed" mt={4}>
                          {yearly 
                            ? `${new Intl.NumberFormat('en-NG', {
                                style: 'currency',
                                currency: 'NGN',
                              }).format(plan.monthlyPrice)} monthly value` 
                            : 'billed monthly'}
                        </Text>
                      </Box>
                    )}
                  </Group>

                  <Button
                    fullWidth
                    size="lg"
                    mt="xl"
                    variant={plan.popular ? 'filled' : 'light'}
                    color={plan.color}
                    component='a'
                    href='https://web.shopkeeperpos.com/'
                    radius="xl"
                  >
                    {plan.monthlyPrice === 0 ? 'Get Started' : 'Start Free Trial'}
                  </Button>

                  <List spacing="sm" size="sm" mt="xl" center>
                    {features[plan.tier].map((feature) => (
                      <Tooltip
                        key={feature.name}
                        label={feature.description}
                        position="top"
                        multiline
                        w={220}
                      >
                        <List.Item
                          icon={
                            <ThemeIcon
                              size={20}
                              radius="xl"
                              color={feature.enabled ? plan.color : 'gray'}
                              variant="light"
                            >
                              {feature.enabled ? (
                                <IconCheck style={{ width: rem(12), height: rem(12) }} />
                              ) : (
                                <IconX style={{ width: rem(12), height: rem(12) }} />
                              )}
                            </ThemeIcon>
                          }
                        >
                          <Group gap={4} wrap="nowrap">
                            <Text size="sm">{feature.name}</Text>
                            {feature.limit && (
                              <Text size="xs" c="dimmed">
                                ({feature.limit})
                              </Text>
                            )}
                          </Group>
                        </List.Item>
                      </Tooltip>
                    ))}
                  </List>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        <Card withBorder radius="xl" className={classes.faqCard} mt={80}>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack>
                <Title order={2}>Frequently Asked Questions</Title>
                <Text size="lg" c="dimmed">
                  Everything you need to know about our pricing and products
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="lg">
                <div>
                  <Text fw={500} mb="xs">
                    What does "per business location" mean?
                  </Text>
                  <Text size="sm" c="dimmed">
                    Each physical store or business location requires its own subscription. This
                    ensures dedicated resources and optimal performance for each location.
                  </Text>
                </div>
                <div>
                  <Text fw={500} mb="xs">
                    Can I change plans later?
                  </Text>
                  <Text size="sm" c="dimmed">
                    Yes, you can upgrade or downgrade your plan at any time. The changes will be
                    prorated based on your billing cycle.
                  </Text>
                </div>
                <div>
                  <Text fw={500} mb="xs">
                    What payment methods do you accept?
                  </Text>
                  <Text size="sm" c="dimmed">
                    We accept all major credit cards, bank transfers, and local payment methods in
                    Nigeria.
                  </Text>
                </div>
              </Stack>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>
    </>
  );
}
