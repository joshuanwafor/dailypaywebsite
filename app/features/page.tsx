import {
  IconArrowRight,
  IconBarcode,
  IconChartBar,
  IconCheck,
  IconCloud,
  IconCreditCard,
  IconDeviceCameraPhone,
  IconDeviceMobile,
  IconReceipt,
  IconReportMoney,
  IconSettings,
  IconShoppingCart,
  IconUsers,
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
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { BOOKDEMO_LINK, SHOPKEEPER_WEBAPP_URL } from '@/utils/constants';
import classes from './page.module.css';

const mainFeatures = [
  {
    title: 'Point of Sale',
    description: 'Fast and intuitive POS interface designed for efficiency',
    icon: IconDeviceCameraPhone,
    color: 'blue',
    features: [
      'Touch-optimized interface',
      'Quick product search',
      'Custom keyboard shortcuts',
      'Multiple payment methods',
      'Split payments support',
      'Customer display support',
    ],
    image: '/checkout-view.png',
  },
  {
    title: 'Inventory Management',
    description: 'Complete control over your stock and inventory',
    icon: IconShoppingCart,
    color: 'teal',
    features: [
      'Real-time stock tracking',
      'Automatic stock updates',
      'Low stock alerts',
      'Purchase order management',
      'Multi-location support',
      'Batch import/export',
    ],
    image: '/inventory-view.png',
  },
  {
    title: 'Financial Management',
    description: 'Comprehensive financial tracking and reporting',
    icon: IconReportMoney,
    color: 'violet',
    features: [
      'Sales tracking',
      'Tax management',
      'Cost tracking',
      'Multiple currencies',
      'Cash management',
      'Financial reports',
    ],
    image: '/report-view.png',
  },
  {
    title: 'Reporting & Analytics',
    description: 'Data-driven insights for better decision making',
    icon: IconChartBar,
    color: 'indigo',
    features: [
      'Sales analytics',
      'Inventory reports',
      'Customer insights',
      'Employee performance',
      'Custom reports',
      'Export capabilities',
    ],
    image: '/dashboard-view.png',
  },
];

const additionalFeatures = [
  {
    title: 'Customer Management',
    description: 'Build and maintain customer relationships',
    icon: IconUsers,
    color: 'grape',
  },
  {
    title: 'Receipt Customization',
    description: 'Design custom receipts with your branding',
    icon: IconReceipt,
    color: 'pink',
  },
  {
    title: 'Easy Configuration',
    description: 'Simple setup and customization options',
    icon: IconSettings,
    color: 'orange',
  },
  {
    title: 'Cloud Backup',
    description: 'Secure cloud backup of your data',
    icon: IconCloud,
    color: 'cyan',
  },
  {
    title: 'Mobile Access',
    description: 'Access your business data on mobile devices',
    icon: IconDeviceMobile,
    color: 'blue',
  },
  {
    title: 'Hardware Integration',
    description: 'Works with standard POS hardware',
    icon: IconBarcode,
    color: 'teal',
  },
];

const businessTypes = [
  {
    value: 'retail',
    label: 'Retail',
    color: 'blue',
    icon: IconShoppingCart,
    description: 'Perfect for retail stores, boutiques, and specialty shops',
    features: [
      {
        title: 'Quick Sales Processing',
        description: 'Fast checkout with barcode scanning and quick search',
      },
      {
        title: 'Inventory Tracking',
        description: 'Real-time stock management across multiple locations',
      },
      {
        title: 'Customer Loyalty',
        description: 'Built-in loyalty program and customer management',
      },
      {
        title: 'Retail Analytics',
        description: 'Sales trends and inventory performance insights',
      },
    ],
  },
  {
    value: 'restaurant',
    label: 'Restaurant',
    color: 'teal',
    icon: IconReceipt,
    description: 'Tailored for restaurants, cafes, and food service businesses',
    features: [
      {
        title: 'Table Management',
        description: 'Visual table layout with order tracking',
      },
      {
        title: 'Kitchen Display',
        description: 'Real-time order management and kitchen communication',
      },
      {
        title: 'Menu Management',
        description: 'Easy menu updates and modifier options',
      },
      {
        title: 'Reservations',
        description: 'Table reservations and waiting list management',
      },
    ],
  },
  {
    value: 'service',
    label: 'Service Business',
    color: 'violet',
    icon: IconUsers,
    description: 'Ideal for service providers and professional businesses',
    features: [
      {
        title: 'Appointment Scheduling',
        description: 'Calendar management and booking system',
      },
      {
        title: 'Service Tracking',
        description: 'Track service delivery and completion status',
      },
      {
        title: 'Client Management',
        description: 'Detailed client profiles and history',
      },
      {
        title: 'Resource Planning',
        description: 'Staff scheduling and resource allocation',
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <div className={classes.hero}>
        <Container size="lg">
          <Grid align="center" py={100} gutter={40}>
            <GridCol span={{ base: 12, md: 6 }}>
              <div className={classes.heroContent}>
                <Badge variant="filled" size="lg" mb="md">
                  All Features
                </Badge>
                <Title className={classes.title}>Everything You Need to Run Your Business</Title>
                <Text c="dimmed" size="lg" mt="md" mb="xl">
                  Discover a comprehensive suite of tools designed to streamline your operations,
                  boost efficiency, and grow your business. From point of sale to inventory
                  management, we've got you covered.
                </Text>
                <Group>
                  <Button
                    size="lg"
                    rightSection={<IconArrowRight size={16} />}
                    component="a"
                    href={SHOPKEEPER_WEBAPP_URL}
                    target="_blank"
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="light"
                    size="lg"
                    component="a"
                    href={BOOKDEMO_LINK}
                    target="_blank"
                  >
                    View Demo
                  </Button>
                </Group>
              </div>
            </GridCol>
            <GridCol span={{ base: 12, md: 6 }}>
              <div className={classes.heroImage}>
                <Image
                  src="/man3.jpg"
                  alt="Features Overview"
                  className={classes.image}
                  fallbackSrc="https://placehold.co/600x400?text=Features+Overview"
                />
                <div className={classes.highlight}>
                  <ThemeIcon size={40} radius="md" className={classes.highlightIcon}>
                    <IconCheck style={{ width: rem(24), height: rem(24) }} />
                  </ThemeIcon>
                  <div>
                    <Text fw={700}>Complete Solution</Text>
                    <Text size="sm" c="dimmed">
                      All the tools you need in one place
                    </Text>
                  </div>
                </div>
              </div>
            </GridCol>
          </Grid>
        </Container>
      </div>

      <Container size="lg" py={80}>
        {/* Business Type Tabs */}
        <Stack align="center" mb={50}>
          <Badge variant="filled" size="lg">
            Industries
          </Badge>
          <Title order={2} ta="center" className={classes.sectionTitle}>
            Solutions for Every Business
          </Title>
          <Text c="dimmed" ta="center" maw={800} size="lg">
            Discover how Shopkeeper POS adapts to your specific industry needs
          </Text>
        </Stack>

        <Card withBorder radius="md" className={classes.tabsCard} mb={80}>
          <Tabs defaultValue="retail" variant="pills">
            <TabsList grow>
              {businessTypes.map((type) => (
                <TabsTab
                  key={type.value}
                  value={type.value}
                  leftSection={
                    <ThemeIcon color={type.color} size="sm" variant="light" radius="xl">
                      <type.icon style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
                    </ThemeIcon>
                  }
                >
                  {type.label}
                </TabsTab>
              ))}
            </TabsList>

            {businessTypes.map((type) => (
              <TabsPanel key={type.value} value={type.value} pt="xl">
                <Grid gutter={40}>
                  <GridCol span={{ base: 12, md: 4 }}>
                    <Stack>
                      <ThemeIcon
                        size={56}
                        radius="md"
                        color={type.color}
                        className={classes.businessIcon}
                      >
                        <type.icon style={{ width: rem(32), height: rem(32) }} stroke={1.5} />
                      </ThemeIcon>
                      <Text fz="xl" fw={700}>
                        {type.label} Solutions
                      </Text>
                      <Text size="lg" c="dimmed">
                        {type.description}
                      </Text>
                      <Button
                        variant="light"
                        color={type.color}
                        size="lg"
                        mt="auto"
                        rightSection={<IconArrowRight size={16} />}
                      >
                        Learn More
                      </Button>
                    </Stack>
                  </GridCol>
                  <GridCol span={{ base: 12, md: 8 }}>
                    <Grid>
                      {type.features.map((feature, index) => (
                        <GridCol key={index} span={{ base: 12, sm: 6 }}>
                          <Card withBorder radius="md" className={classes.businessFeatureCard}>
                            <Text fz="lg" fw={500} mb={4}>
                              {feature.title}
                            </Text>
                            <Text fz="sm" c="dimmed">
                              {feature.description}
                            </Text>
                          </Card>
                        </GridCol>
                      ))}
                    </Grid>
                  </GridCol>
                </Grid>
              </TabsPanel>
            ))}
          </Tabs>
        </Card>

        {/* Main Features with improved layout */}
        {mainFeatures.map((feature, index) => (
          <Card key={feature.title} withBorder radius="md" className={classes.featureCard} mb={40}>
            <Grid gutter={40} align="center">
              <GridCol span={{ base: 12, md: 6 }} order={{ base: 2, md: index % 2 === 0 ? 1 : 2 }}>
                <div className={classes.featureContent}>
                  <Group mb="xl">
                    <ThemeIcon
                      size={56}
                      radius="md"
                      color={feature.color}
                      className={classes.featureIcon}
                    >
                      <feature.icon style={{ width: rem(32), height: rem(32) }} stroke={1.5} />
                    </ThemeIcon>
                    <div>
                      <Text fz="xl" fw={700}>
                        {feature.title}
                      </Text>
                      <Text fz="sm" c="dimmed" mt={4}>
                        {feature.description}
                      </Text>
                    </div>
                  </Group>
                  <List
                    spacing="sm"
                    size="md"
                    icon={
                      <ThemeIcon size={24} radius="xl" color={`${feature.color}.4`}>
                        <IconCheck style={{ width: rem(16), height: rem(16) }} />
                      </ThemeIcon>
                    }
                  >
                    {feature.features.map((item) => (
                      <ListItem key={item}>{item}</ListItem>
                    ))}
                  </List>
                  <Button
                    variant="light"
                    color={feature.color}
                    mt="xl"
                    rightSection={<IconArrowRight size={16} />}
                  >
                    Learn More
                  </Button>
                </div>
              </GridCol>
              <GridCol span={{ base: 12, md: 6 }} order={{ base: 1, md: index % 2 === 0 ? 2 : 1 }}>
                <div className={classes.imageWrapper}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    className={classes.featureImage}
                    fallbackSrc="https://placehold.co/600x400?text=Feature+Preview"
                  />
                </div>
              </GridCol>
            </Grid>
          </Card>
        ))}

        {/* Additional Features with improved grid */}
        <div className={classes.additionalSection}>
          <Stack align="center" mb={50}>
            <Badge variant="dot" size="lg">
              More Features
            </Badge>
            <Title order={2} ta="center" className={classes.sectionTitle}>
              Additional Features
            </Title>
            <Text c="dimmed" ta="center" maw={800} size="lg">
              Discover more powerful features that help streamline your business operations
            </Text>
          </Stack>
          <Grid>
            {additionalFeatures.map((feature) => (
              <GridCol key={feature.title} span={{ base: 12, sm: 6, md: 4 }}>
                <Card withBorder radius="md" className={classes.additionalCard}>
                  <ThemeIcon
                    size={50}
                    radius="md"
                    color={feature.color}
                    className={classes.featureIcon}
                  >
                    <feature.icon style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
                  </ThemeIcon>
                  <Text fz="lg" fw={500} mt="md">
                    {feature.title}
                  </Text>
                  <Text fz="sm" c="dimmed" mt={4}>
                    {feature.description}
                  </Text>
                  <Button variant="subtle" color={feature.color} mt="md" size="sm">
                    Learn More
                  </Button>
                </Card>
              </GridCol>
            ))}
          </Grid>
        </div>

        {/* Hardware Support with improved layout */}
        <Card withBorder radius="md" className={classes.hardwareCard} mt={80}>
          <Grid align="center" gutter={40}>
            <GridCol span={{ base: 12, md: 6 }}>
              <Stack>
                <Badge variant="dot" size="lg">
                  Hardware
                </Badge>
                <Title order={2}>Hardware Support</Title>
                <Text c="dimmed" size="lg">
                  Compatible with a wide range of POS hardware and peripherals
                </Text>
                <List
                  spacing="md"
                  size="md"
                  mt="xl"
                  icon={
                    <ThemeIcon size={28} radius="xl">
                      <IconCheck style={{ width: rem(18), height: rem(18) }} />
                    </ThemeIcon>
                  }
                >
                  <ListItem>Barcode Scanners</ListItem>
                  <ListItem>Receipt Printers</ListItem>
                  <ListItem>Cash Drawers</ListItem>
                  <ListItem>Payment Terminals</ListItem>
                  <ListItem>Customer Displays</ListItem>
                  <ListItem>Touch Screens</ListItem>
                </List>
                <Button variant="light" size="lg" mt="xl">
                  View Compatible Hardware
                </Button>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 6 }}>
              <div className={classes.hardwareImageWrapper}>
                <Image
                  src="https://i5.walmartimages.com/asr/b0d67c9d-2624-47b3-9037-776f09bb7221.231f774994c825514832dae50674d1d0.jpeg"
                  alt="Hardware Support"
                  className={classes.hardwareImage}
                  fallbackSrc="https://i5.walmartimages.com/asr/b0d67c9d-2624-47b3-9037-776f09bb7221.231f774994c825514832dae50674d1d0.jpeg"
                />
              </div>
            </GridCol>
          </Grid>
        </Card>
      </Container>
    </>
  );
}
