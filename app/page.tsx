import {
  IconBarcode,
  IconCheck,
  IconCreditCard,
  IconDeviceAnalytics,
  IconDeviceLaptop,
  IconDownload,
  IconReceipt,
  IconReportAnalytics,
  IconReportMoney,
  IconSettings,
  IconShoppingCart,
  IconUsers,
  IconVideo,
} from '@tabler/icons-react';
import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  GridCol,
  Group,
  Image,
  List,
  ListItem,
  rem,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import HeroImage from '@/components/Sections/HeroImage';
import { BOOKDEMO_LINK, DOWNLOAD_SHOPKEEPER_WINDOWS_URL, SHOPKEEPER_WEBAPP_URL } from '@/utils/constants';
import classes from './page.module.css';

const features = [
  {
    icon: IconDeviceAnalytics,
    title: 'Intuitive Point of Sale',
    description:
      'Lightning-fast POS system designed specifically for retail and hospitality businesses',
    highlights: [
      'Touch-optimized interface for speed',
      'Customizable keyboard shortcuts',
      'Support for all payment methods',
      'Full offline functionality',
    ],
    color: 'blue',
  },
  {
    icon: IconShoppingCart,
    title: 'Smart Inventory Management',
    description: 'Comprehensive inventory control with precise stock tracking and automation',
    highlights: [
      'Real-time inventory updates',
      'Multi-location stock management',
      'Automated purchase orders',
      'Seamless stock transfers',
    ],
    color: 'teal',
  },
  {
    icon: IconReportMoney,
    title: 'Financial Intelligence',
    description: 'Powerful sales analytics and accounting tools to maximize profitability',
    highlights: [
      'Advanced sales analytics',
      'Automated tax management',
      'Precise cost tracking',
      'Comprehensive financial reporting',
    ],
    color: 'indigo',
  },
  {
    icon: IconDeviceAnalytics,
    title: 'Actionable Insights',
    description: 'Data-driven reports and analytics to make smarter business decisions',
    highlights: [
      'Customizable business reports',
      'One-click export to Excel/PDF',
      'Intelligent sales forecasting',
      'Key performance indicators',
    ],
    color: 'violet',
  },
];

const systemRequirements = [
  'Windows 10 or newer',
  '2GB RAM minimum (4GB recommended)',
  '1024x768 screen resolution',
  'Internet connection for activation',
];

const integrations = [
  { icon: IconBarcode, title: 'Barcode Scanners' },
  { icon: IconCreditCard, title: 'Payment Terminals' },
  { icon: IconReceipt, title: 'Receipt Printers' },
  { icon: IconReportAnalytics, title: 'Fiscal Devices' },
];

const additionalFeatures = [
  {
    icon: IconSettings,
    title: 'Effortless Setup',
    description:
      'Be operational in minutes with our streamlined installation process and intuitive configuration wizard.',
  },
  {
    icon: IconUsers,
    title: 'Team Collaboration',
    description:
      'Create role-based user accounts with granular permissions and comprehensive activity tracking.',
  },
  {
    icon: IconReceipt,
    title: 'Branded Receipts',
    description:
      'Create professional receipts with your logo, custom messaging, and targeted promotions.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className={classes.hero}>
        <Container size="lg">
          <Grid gutter={50} align="center">
            <GridCol span={{ base: 12, md: 6 }}>
              <Stack className={classes.heroContent} gap="xl">
                <div>
                  <Badge size="lg" radius="sm" variant="filled" className={classes.badge}>
                    New Version 4.0 Released
                  </Badge>
                  <Title className={classes.title} mt="lg">
                    Elevate Your Business with Modern POS
                  </Title>
                  <Text size="lg" c="dimmed" mt="md">
                    The complete business management solution crafted for modern retailers and
                    hospitality businesses. Streamline operations, boost sales, and delight
                    customers with our all-in-one platform.
                  </Text>
                </div>

                <div>
                  <Group mt="xl">
                    <Button
                      size="lg"
                      leftSection={<IconDownload size={20} />}
                      radius="md"
                      px="xl"
                      style={{ boxShadow: '0 8px 16px rgba(0, 102, 255, 0.2)' }}
                      component="a"
                      href={"/download"}
                      target="_blank"
                    >
                      Download Free Trial
                    </Button>
                    <Button
                      size="lg"
                      variant="light"
                      leftSection={<IconDeviceLaptop size={20} />}
                      radius="md"
                      px="xl"
                      component="a"
                      href={BOOKDEMO_LINK}
                      target="_blank"
                    >
                      See It In Action
                    </Button>
                  </Group>
                  <Text size="sm" c="dimmed" mt="md">
                    No credit card required • Full-featured 14-day trial • Cancel anytime
                  </Text>
                </div>

                <Card withBorder radius="md" className={classes.requirementsCard}>
                  <Text size="sm" fw={500} mb="xs">
                    Minimal System Requirements:
                  </Text>
                  <List
                    spacing="xs"
                    size="sm"
                    icon={
                      <ThemeIcon size={16} radius="xl" color="blue.4">
                        <IconCheck style={{ width: rem(10), height: rem(10) }} />
                      </ThemeIcon>
                    }
                  >
                    {systemRequirements.map((req) => (
                      <ListItem key={req}>{req}</ListItem>
                    ))}
                  </List>
                </Card>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 6 }}>
              <div className={classes.imageWrapper}>
                <HeroImage />
              </div>
            </GridCol>
          </Grid>
        </Container>
      </div>

      {/* Features Section */}
      <Container size="lg" py={120}>
        <Stack align="center" mb={60}>
          <Badge variant="filled" size="lg" radius="md">
            Core Capabilities
          </Badge>
          <Title order={2} ta="center" className={classes.sectionTitle}>
            Powerful Tools to Drive Your Success
          </Title>
          <Text c="dimmed" ta="center" maw={800} size="lg">
            Our all-in-one solution delivers every essential tool modern businesses need—from
            lightning-fast sales processing to deep analytics that reveal growth opportunities.
          </Text>
        </Stack>

        <Grid gutter={30}>
          {features.map((feature) => (
            <GridCol key={feature.title} span={{ base: 12, sm: 6, md: 3 }}>
              <Card p="xl" radius="md" className={classes.featureCard} shadow="sm">
                <ThemeIcon
                  size={60}
                  radius="md"
                  className={classes.featureIcon}
                  color={feature.color}
                >
                  <feature.icon style={{ width: rem(32), height: rem(32) }} stroke={1.5} />
                </ThemeIcon>
                <Text size="xl" fw={600} mt="md">
                  {feature.title}
                </Text>
                <Text size="sm" c="dimmed" mt="sm" lh={1.6}>
                  {feature.description}
                </Text>
                <List
                  mt="lg"
                  spacing="sm"
                  size="sm"
                  icon={
                    <ThemeIcon size={22} radius="xl" color={`${feature.color}.4`}>
                      <IconCheck style={{ width: rem(14), height: rem(14) }} />
                    </ThemeIcon>
                  }
                >
                  {feature.highlights.map((highlight) => (
                    <ListItem key={highlight}>{highlight}</ListItem>
                  ))}
                </List>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Container>

      {/* Hardware Integration Section */}
      <div className={classes.integration}>
        <Container size="lg" py={120}>
          <Stack align="center" mb={60}>
            <Badge variant="filled" size="lg" radius="md">
              Hardware Compatibility
            </Badge>
            <Title order={2} ta="center" className={classes.sectionTitle}>
              Seamless Integration with Your Equipment
            </Title>
            <Text c="dimmed" ta="center" maw={800} size="lg">
              Compatible with industry-standard POS hardware and peripherals. Simply connect your
              devices and begin serving customers within minutes.
            </Text>
          </Stack>

          <Grid justify="center" gutter={40}>
            {integrations.map((item) => (
              <GridCol key={item.title} span={{ base: 6, xs: 3 }}>
                <Card className={classes.integrationCard} withBorder>
                  <Stack align="center" gap="lg">
                    <ThemeIcon size={70} radius="md" className={classes.integrationIcon}>
                      <item.icon style={{ width: rem(35), height: rem(35) }} stroke={1.5} />
                    </ThemeIcon>
                    <Text fw={600} ta="center" size="lg">
                      {item.title}
                    </Text>
                  </Stack>
                </Card>
              </GridCol>
            ))}
          </Grid>
        </Container>
      </div>

      {/* Additional Features Section */}
      <Container size="lg" py={120}>
        <Grid gutter={60}>
          <GridCol span={{ base: 12, md: 5 }}>
            <div className={classes.additionalContent}>
              <Badge variant="filled" size="lg" mb="md" radius="md">
                Adaptability
              </Badge>
              <Title order={2} className={classes.sectionTitle}>
                Tailored to Your Business Needs
              </Title>
              <Text c="dimmed" mt="md" size="lg" lh={1.7}>
                Whether you run a bustling retail store, a popular restaurant, or a service-based
                business, Shopkeeper adapts to your unique requirements with flexible features and
                customizable settings.
              </Text>
              <Card withBorder mt={40} className={classes.highlightsCard} p="xl">
                <List
                  spacing="md"
                  size="md"
                  icon={
                    <ThemeIcon size={24} radius="xl">
                      <IconCheck style={{ width: rem(14), height: rem(14) }} />
                    </ThemeIcon>
                  }
                >
                  <ListItem>Fully customizable interface</ListItem>
                  <ListItem>Dynamic pricing and promotion rules</ListItem>
                  <ListItem>Integrated payment processing options</ListItem>
                  <ListItem>Scalable inventory solutions</ListItem>
                </List>
              </Card>
            </div>
          </GridCol>
          <GridCol span={{ base: 12, md: 7 }}>
            <Grid>
              {additionalFeatures.map((feature, index) => (
                <GridCol key={feature.title} span={{ base: 12, sm: 6 }}>
                  <Card withBorder className={classes.additionalCard} shadow="sm">
                    <ThemeIcon size={50} radius="md" className={classes.featureIcon}>
                      <feature.icon style={{ width: rem(25), height: rem(25) }} stroke={1.5} />
                    </ThemeIcon>
                    <Text size="xl" fw={600} mt="lg">
                      {feature.title}
                    </Text>
                    <Text size="sm" c="dimmed" mt="sm" lh={1.6}>
                      {feature.description}
                    </Text>
                  </Card>
                </GridCol>
              ))}
            </Grid>
          </GridCol>
        </Grid>
      </Container>

      {/* CTA Section */}
      <div className={classes.cta}>
        <Container size="lg" py={100}>
          <Card withBorder radius="lg" className={classes.ctaCard}>
            <Stack ta="center" gap="xl">
              <Title order={2} size={36}>
                Transform Your Business with Shopkeeper
              </Title>
              <Text size="xl" maw={700} mx="auto" lh={1.6}>
                Join thousands of successful businesses already using our powerful POS solution to
                streamline operations, increase efficiency, and drive sustainable growth.
              </Text>
              <Group justify="center" mt="md">
                <Button
                  size="xl"
                  leftSection={<IconDownload size={20} />}
                  radius="md"
                  px="xl"
                  component="a"
                  href={SHOPKEEPER_WEBAPP_URL}
                  target="_blank"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  rightSection={<IconVideo size={20} />}
                  radius="md"
                  px="xl"
                  className={classes.ctaDemoButton}
                  component="a"
                  href={BOOKDEMO_LINK}
                  target="_blank"
                >
                  Schedule Live Demo
                </Button>
              </Group>
            </Stack>
          </Card>
        </Container>
      </div>
    </>
  );
}
