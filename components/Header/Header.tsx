'use client';

import React from 'react';
import Link from 'next/link';
import { IconArrowRight, IconLogin, IconUser, IconShield } from '@tabler/icons-react';
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
  Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

const mainLinks = [
  { link: '/features', label: 'Features' },
  { link: '/how-it-works', label: 'How It Works' },
  { link: '/security', label: 'Security' },
  { link: '/contact', label: 'Contact' },
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
        <Group justify="space-between" h="70px">
          <Link href="/" className={classes.logo}>
            <Image
              src="/logo-text-light.svg"
              alt="DailyPay by Alerts"
              h={40}
              w="auto"
              fit="contain"
            />
          </Link>
          
          <Group gap="md" visibleFrom="sm">
            {mainItems}
          </Group>

          <Group gap="sm">
            <Button 
              variant="subtle" 
              component="a" 
              href="/login" 
              visibleFrom="sm"
              size="sm"
              className={classes.loginBtn}
            >
              Login
            </Button>
            <Button 
              component="a" 
              href="/register" 
              visibleFrom="sm"
              size="sm"
              className={classes.ctaBtn}
            >
              Get Started
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
      <Burger onClick={toggle} size="sm" />
      <Drawer
        onClose={close}
        opened={isOpen}
        withCloseButton={false}
        size="sm"
        styles={{
          body: {
            padding: 0,
          },
        }}
      >
        <Stack gap={0}>
          <Group justify="space-between" p="md" py="sm" pb="xs" className={classes.mobileHeader}>
            <Link href="/" className={classes.logo} onClick={close}>
              <Image
                src="/logo-text-dark.svg"
                alt="DailyPay by Alerts"
                h={32}
                w="auto"
                fit="contain"
              />
            </Link>
            <Burger onClick={close} size="sm" />
          </Group>
          <Divider />

          {mainLinks.map((item, index) => (
            <Box key={index}>
              <a
                key={item.label}
                href={item.link}
                style={{ textDecoration: 'none', color: 'inherit' }}
                onClick={close}
              >
                <Group p="md" justify="space-between" className={classes.mobileLink}>
                  <Text size="sm" fw={500}>{item.label}</Text>
                  <IconArrowRight size={16} color={theme.colors.gray[6]} />
                </Group>
              </a>
              {mainLinks.length - 1 !== index && <Divider />}
            </Box>
          ))}
          
          <Stack px="md" pt="lg" pb="md" gap="sm">
            <Divider mb="sm" />
            <Button 
              variant="subtle" 
              rightSection={<IconLogin size={16} />} 
              component="a" 
              href="/login"
              fullWidth
              size="sm"
              onClick={close}
              className={classes.mobileLoginBtn}
            >
              Login
            </Button>
            <Button 
              rightSection={<IconUser size={16} />} 
              component="a" 
              href="/register"
              fullWidth
              size="sm"
              onClick={close}
              className={classes.mobileCTABtn}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </React.Fragment>
  );
}
