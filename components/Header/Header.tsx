'use client';

import React from 'react';
import Link from 'next/link';
import { IconArrowRight, IconDownload, IconVideo } from '@tabler/icons-react';
import {
  Box,
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BOOKDEMO_LINK } from '@/utils/constants';
import classes from './Header.module.css';

const mainLinks = [
  { link: '/features', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/download', label: 'Download' },
  { link: '/faq', label: 'FAQ' },
];

export function Header() {
  const mainItems = mainLinks.map((item) => (
    <a key={item.label} href={item.link} className={classes.mainLink}>
      {item.label}
    </a>
  ));

  return (
    <Box className={classes.header}>
      <Container size="lg">
        <Group justify="space-between" h="60px">
          <Link href="/" className={classes.logo}>
            <Box mt={'4px'}>
              <img src="/logo-text1.svg" alt="Shopkeeper" width={190} />
            </Box>
          </Link>
          <Group gap={0} visibleFrom="sm">
            {mainItems}
          </Group>

          <Group>
            <Button component="a" href="/download" visibleFrom="sm">
              Download App
            </Button>
            <Box hiddenFrom="sm">
              <MobileMenu />
            </Box>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}

function MobileMenu() {
  const [isOpen, { close, open, toggle }] = useDisclosure(false);
  const theme = useMantineTheme();
  return (
    <React.Fragment>
      <Burger onClick={toggle} />
      <Drawer
        onClose={close}
        opened={isOpen}
        withCloseButton={false}
        styles={{
          body: {
            padding: 0,
          },
        }}
      >
        <Stack gap={0}>
          <Group justify="space-between" p={'md'} py={'sm'} pb={'xs'}>
            <Link href="/" className={classes.logo}>
              <Box mt={'4px'}>
                <img src="/logo-text1.svg" alt="Shopkeeper" width={190} />
              </Box>
            </Link>
            <Burger onClick={close} />
          </Group>
          <Divider />

          {mainLinks.map((item, index) => (
            <Box key={index}>
              <a
                key={item.label}
                href={item.link}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Group p={'md'} justify="space-between">
                  <Text>{item.label}</Text>
                  <IconArrowRight color={theme.colors.gray[7]} />
                </Group>
              </a>
              {mainLinks.length - 1 !== index && <Divider />}
            </Box>
          ))}
          <Stack px={'md'}>
            <Divider mb={'md'} variant="dashed" />
            <Button rightSection={<IconDownload />} component="a" href="/download">
              Download app
            </Button>
            <Button variant="light" rightSection={<IconVideo />} component="a" href={BOOKDEMO_LINK} target="_blank">
              Book demo
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </React.Fragment>
  );
}
