'use client';

import {
  IconBrandAndroid,
  IconBrandApple,
  IconBrowser,
  IconCheck,
  IconDeviceLaptop,
  IconDeviceMobile,
  IconDownload,
  IconFileDownload,
  IconHistory,
  IconInfoCircle,
  IconServer,
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
  Tabs,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import PageHeaderSection from '@/components/Sections/PageHeaderSection';
import {
  DOWNLOAD_SHOPKEEPER_APK_URL,
  DOWNLOAD_SHOPKEEPER_WINDOWS_URL,
  SHOPKEEPER_WEBAPP_URL,
} from '@/utils/constants';
import classes from './page.module.css';

const versions = [
  {
    version: '4.0',
    type: 'Windows Desktop',
    description: 'Full-featured POS solution for Windows',
    features: [
      'Point of Sale',
      'Inventory Management',
      'Customer Management',
      'Advanced Analytics',
      'Multi-store Management',
      'API Access',
    ],
    size: '98.8 MB',
    date: 'March 15, 2024',
    isLatest: true,
    link: DOWNLOAD_SHOPKEEPER_WINDOWS_URL,
    icon: IconDeviceLaptop,
    color: 'blue',
    price: {
      amount: 3500,
      period: 'month',
      note: 'per store',
    },
  },
  {
    version: '4.0',
    type: 'Web Application',
    description: 'Access Shopkeeper from any browser',
    features: [
      'No installation required',
      'Cross-platform compatibility',
      'Automatic updates',
      'Access from anywhere',
      'Real-time synchronization',
      'Cloud backup',
    ],
    isLatest: true,
    link: SHOPKEEPER_WEBAPP_URL,
    icon: IconBrowser,
    color: 'grape',
    isWebApp: true,
    price: {
      amount: 3500,
      period: 'month',
      note: 'per store',
    },
  },
];

const requirements = {
  minimum: [
    'Windows 10 or newer',
    '2GB RAM',
    '1024x768 screen resolution',
    '500MB free disk space',
    '.NET Framework 4.8',
  ],
  recommended: [
    'Windows 11',
    '4GB RAM',
    '1920x1080 screen resolution',
    '1GB free disk space',
    'SSD Storage',
  ],
};

const mobileApps = [
  {
    platform: 'Android',
    icon: IconBrandAndroid,
    description: 'For Android 8.0 and newer',
    features: [
      'Real-time sync with desktop',
      'Mobile POS functionality',
      'Inventory checking',
      'Sales reports on the go',
    ],
    size: '12 MB',
    version: '1.2.11',
    color: 'teal',
    link: DOWNLOAD_SHOPKEEPER_APK_URL,
    notAvailable: false,
    price: {
      amount: 0,
      note: 'Free with desktop/web',
    },
  },
  {
    platform: 'iOS',
    icon: IconBrandApple,
    description: 'Coming Soon - Join the waitlist',
    features: [
      'Real-time sync with desktop',
      'Mobile POS functionality',
      'Inventory checking',
      'Sales reports on the go',
    ],
    version: 'Coming Soon',
    color: 'gray',
    notAvailable: true,
    isComingSoon: true,
    price: {
      amount: 0,
      note: 'Free with desktop/web',
    },
  },
];

export default function DownloadPage() {
  return (
    <>
      <Box bg="gray.0" py={50}>
        <Container size="lg">
          <Stack align="center" gap="xl">
            <Badge variant="filled" size="lg" radius="xl">
              Downloads
            </Badge>
            <Title order={1} ta="center" size="h1">
              Choose Your Platform
            </Title>
            <Text c="dimmed" ta="center" maw={600} size="lg">
              Start your 14-day free trial. No credit card required. All plans include unlimited
              products, customers, and transactions.
            </Text>
          </Stack>
        </Container>
      </Box>

      <Container size="lg" mt={30}>
        {/* Desktop Section */}
        <div className={classes.section}>
          <Grid gutter={40}>
            {versions.map((version) => (
              <Grid.Col key={version.type} span={{ base: 12, md: 6 }}>
                <Card withBorder radius="xl" className={classes.versionCard} padding="xl">
                  <Stack>
                    <Group>
                      <ThemeIcon
                        size={64}
                        radius="xl"
                        color={version.color}
                        className={classes.appIcon}
                        variant="light"
                      >
                        <version.icon style={{ width: rem(36), height: rem(36) }} stroke={1.5} />
                      </ThemeIcon>
                      <Box>
                        <Group align="center" gap="xs">
                          <Text fz={24} fw={700}>
                            {version.type}
                          </Text>
                          {version.isLatest && (
                            <Badge variant="filled" color="green" size="lg" radius="xl">
                              Latest
                            </Badge>
                          )}
                        </Group>
                        <Text c="dimmed" size="sm" mt={4}>
                          {version.description}
                        </Text>
                      </Box>
                    </Group>

                    <Group mt="md">
                      <Text fz={42} fw={900} style={{ lineHeight: 1 }}>
                        {new Intl.NumberFormat('en-NG', {
                          style: 'currency',
                          currency: 'NGN',
                        }).format(version.price.amount)}
                      </Text>
                      <Box>
                        <Text fz="md" c="dimmed" style={{ lineHeight: 1 }}>
                          per {version.price.period}
                        </Text>
                        <Text fz="xs" c="dimmed" mt={4}>
                          {version.price.note}
                        </Text>
                      </Box>
                    </Group>

                    <List
                      spacing="sm"
                      size="sm"
                      mt="xl"
                      center
                      icon={
                        <ThemeIcon size={24} radius="xl" color={version.color} variant="light">
                          <IconCheck style={{ width: rem(14), height: rem(14) }} />
                        </ThemeIcon>
                      }
                    >
                      {version.features.map((feature) => (
                        <List.Item key={feature}>{feature}</List.Item>
                      ))}
                    </List>

                    {!version.isWebApp && (
                      <Card
                        withBorder
                        radius="lg"
                        className={classes.infoCard}
                        mt="xl"
                        padding="sm"
                      >
                        <Group gap="xs" justify="center">
                          <Text size="sm" fw={500}>
                            Version {version.version}
                          </Text>
                          <Text size="sm" c="dimmed">
                            •
                          </Text>
                          <Text size="sm">{version.size}</Text>
                          <Text size="sm" c="dimmed">
                            •
                          </Text>
                          <Text size="sm">{version.date}</Text>
                        </Group>
                      </Card>
                    )}

                    <Button
                      fullWidth
                      leftSection={
                        version.isWebApp ? <IconBrowser size={20} /> : <IconDownload size={20} />
                      }
                      size="xl"
                      mt="xl"
                      component="a"
                      href={version.link}
                      target="_blank"
                      color={version.color}
                      radius="xl"
                    >
                      {version.isWebApp ? 'Launch Web App' : `Download for Windows`}
                    </Button>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </div>

        {/* Mobile Section */}
        <div className={classes.section}>
          <Stack align="center" mb={50}>
            <Badge variant="dot" size="lg" radius="xl">
              Mobile Apps
            </Badge>
            <Title order={2} ta="center" className={classes.sectionTitle}>
              Take Your Business Mobile
            </Title>
            <Text c="dimmed" ta="center" maw={800} size="lg">
              Access your business data on the go with our mobile apps. Free with any desktop or web
              subscription.
            </Text>
          </Stack>

          <Grid gutter={40}>
            {mobileApps.map((app) => (
              <Grid.Col key={app.platform} span={{ base: 12, md: 6 }}>
                <Card withBorder radius="xl" className={classes.versionCard} padding="xl">
                  <Stack>
                    <Group>
                      <ThemeIcon
                        size={64}
                        radius="xl"
                        color={app.color}
                        className={classes.appIcon}
                        variant="light"
                      >
                        <app.icon style={{ width: rem(36), height: rem(36) }} stroke={1.5} />
                      </ThemeIcon>
                      <Box>
                        <Group align="center" gap="xs">
                          <Text fz={24} fw={700}>
                            {app.platform} App
                          </Text>
                          {app.isComingSoon && (
                            <Badge color="gray" radius="xl">
                              Coming Soon
                            </Badge>
                          )}
                        </Group>
                        <Text c="dimmed" size="sm" mt={4}>
                          {app.description}
                        </Text>
                      </Box>
                    </Group>

                    <Group mt="md">
                      <Text fz={42} fw={900} style={{ lineHeight: 1 }}>
                        Free
                      </Text>
                      <Box>
                        <Text fz="xs" c="dimmed" mt={4}>
                          {app.price.note}
                        </Text>
                      </Box>
                    </Group>

                    <List
                      spacing="sm"
                      size="sm"
                      mt="xl"
                      center
                      icon={
                        <ThemeIcon size={24} radius="xl" color={app.color} variant="light">
                          <IconCheck style={{ width: rem(14), height: rem(14) }} />
                        </ThemeIcon>
                      }
                    >
                      {app.features.map((feature) => (
                        <List.Item key={feature}>{feature}</List.Item>
                      ))}
                    </List>

                    <Card withBorder radius="lg" className={classes.infoCard} mt="xl" padding="sm">
                      <Group gap="xs" justify="center">
                        <Text size="sm" fw={500}>
                          Version {app.version}
                        </Text>
                        {!app.isComingSoon && (
                          <>
                            <Text size="sm" c="dimmed">
                              •
                            </Text>
                            <Text size="sm">{app.size}</Text>
                          </>
                        )}
                      </Group>
                    </Card>

                    <Button
                      fullWidth
                      leftSection={
                        app.isComingSoon ? <IconBrandApple size={20} /> : <IconDownload size={20} />
                      }
                      size="xl"
                      mt="xl"
                      color={app.color}
                      disabled={app.isComingSoon}
                      component={app.isComingSoon ? undefined : 'a'}
                      href={app.isComingSoon ? undefined : app.link}
                      target={app.isComingSoon ? undefined : '_blank'}
                      rel={app.isComingSoon ? undefined : 'noopener noreferrer'}
                      radius="xl"
                    >
                      {app.isComingSoon ? 'Join Waitlist' : `Download for ${app.platform}`}
                    </Button>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>

          <Card withBorder radius="xl" className={classes.benefitsCard} mt={40} padding="xl">
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack>
                  <Title order={3}>Why Use Mobile App?</Title>
                  <Text c="dimmed" size="lg">
                    Extend your POS capabilities to mobile devices and manage your business from
                    anywhere
                  </Text>
                  <List
                    spacing="sm"
                    size="md"
                    mt="xl"
                    icon={
                      <ThemeIcon size={28} radius="xl" color="blue" variant="light">
                        <IconCheck style={{ width: rem(18), height: rem(18) }} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>Access your business data anywhere, anytime</List.Item>
                    <List.Item>Process sales on mobile devices</List.Item>
                    <List.Item>Check inventory in real-time</List.Item>
                    <List.Item>View reports and analytics on the go</List.Item>
                    <List.Item>Seamless sync with desktop version</List.Item>
                  </List>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <div className={classes.imageWrapper}>
                  <Image
                    src="/screenshot-1.png"
                    alt="Mobile App Preview"
                    className={classes.mobilePreview}
                    radius="lg"
                    fallbackSrc="/screenshot-1.png"
                  />
                </div>
              </Grid.Col>
            </Grid>
          </Card>
        </div>

        {/* Requirements Section */}
        <div className={classes.section}>
          <Stack align="center" mb={50}>
            <Badge variant="dot" size="lg" radius="xl">
              Requirements
            </Badge>
            <Title order={2} ta="center" className={classes.sectionTitle}>
              System Requirements
            </Title>
            <Text c="dimmed" ta="center" maw={800} size="lg">
              Check if your system meets the requirements
            </Text>
          </Stack>

          <Card withBorder radius="xl" className={classes.requirementsCard}>
            <Tabs defaultValue="minimum">
              <Tabs.List>
                <Tabs.Tab value="minimum" leftSection={<IconDeviceLaptop size={16} />}>
                  Minimum Requirements
                </Tabs.Tab>
                <Tabs.Tab value="recommended" leftSection={<IconServer size={16} />}>
                  Recommended Specifications
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="minimum" pt="xl">
                <List
                  spacing="md"
                  size="md"
                  icon={
                    <ThemeIcon size={28} radius="xl" variant="light">
                      <IconCheck style={{ width: rem(18), height: rem(18) }} />
                    </ThemeIcon>
                  }
                >
                  {requirements.minimum.map((req) => (
                    <List.Item key={req}>{req}</List.Item>
                  ))}
                </List>
              </Tabs.Panel>

              <Tabs.Panel value="recommended" pt="xl">
                <List
                  spacing="md"
                  size="md"
                  icon={
                    <ThemeIcon size={28} radius="xl" color="green" variant="light">
                      <IconCheck style={{ width: rem(18), height: rem(18) }} />
                    </ThemeIcon>
                  }
                >
                  {requirements.recommended.map((req) => (
                    <List.Item key={req}>{req}</List.Item>
                  ))}
                </List>
              </Tabs.Panel>
            </Tabs>
          </Card>
        </div>

        {/* Help Section */}
        <div className={classes.section}>
          <Grid mt={40}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card withBorder radius="xl" className={classes.helpCard} padding="xl">
                <Group>
                  <ThemeIcon
                    size={64}
                    radius="xl"
                    color="blue"
                    className={classes.helpIcon}
                    variant="light"
                  >
                    <IconInfoCircle style={{ width: rem(36), height: rem(36) }} />
                  </ThemeIcon>
                  <div>
                    <Text fz={24} fw={700}>
                      Need Help?
                    </Text>
                    <Text size="md" c="dimmed" mt={4}>
                      Check our installation guide and documentation
                    </Text>
                  </div>
                </Group>
                <Button
                  variant="light"
                  fullWidth
                  disabled
                  mt="xl"
                  size="xl"
                  component="a"
                  href="/documentation"
                  radius="xl"
                >
                  View Documentation
                </Button>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card withBorder radius="xl" className={classes.helpCard} padding="xl">
                <Group>
                  <ThemeIcon
                    size={64}
                    radius="xl"
                    color="grape"
                    className={classes.helpIcon}
                    variant="light"
                  >
                    <IconHistory style={{ width: rem(36), height: rem(36) }} />
                  </ThemeIcon>
                  <div>
                    <Text fz={24} fw={700}>
                      Previous Versions
                    </Text>
                    <Text size="md" c="dimmed" mt={4}>
                      Access older versions of Shopkeeper POS
                    </Text>
                  </div>
                </Group>
                <Button
                  variant="light"
                  fullWidth
                  mt="xl"
                  disabled
                  size="xl"
                  component="a"
                  href="/releases"
                  radius="xl"
                >
                  View Release History
                </Button>
              </Card>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </>
  );
}
