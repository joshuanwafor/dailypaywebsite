'use client';

import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
  IconBrandXFilled,
} from '@tabler/icons-react';
import { Box, Container, Divider, Grid, Group, Image, Stack, Text } from '@mantine/core';
import classes from './Footer.module.css';

const footerLinks = {
  product: [
    { label: 'Features', link: '/features' },
    { label: 'Download', link: 'download' },
    { label: 'Updates', link: '/#updates' },
  ],
  support: [
    { label: 'Help Center', link: '/#help' },
    { label: 'FAQ', link: '/faq' },
    { label: 'Contact', link: '/#contact' },
  ],
  company: [
    { label: 'About', link: '/#about' },
    { label: 'Blog', link: '/#blog' },
    { label: 'Partners', link: '/#partners' },
  ],
  legal: [
    { label: 'Privacy Policy', link: '/policy' },
    { label: 'Terms of Service', link: '/terms' },
    { label: 'Acceptable use', link: '/acceptable-use' },
  ],
};

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.logo}>
          <Link href="/" className={classes.logo}>
              <Box>
                <img src="/logo-text1.svg" alt="Shopkeeper" width={190} />
              </Box>
            </Link>
            <Text size="sm" c="dimmed" mt="md" maw={300}>
              Modern point of sale solution for retail stores and hospitality businesses
            </Text>
            <Text size="sm" c="dimmed" mt="lg">
              Contact us:{' '}
              <Link href="mailto:support@shopkeeperpos.com" className={classes.link}>
                support@shopkeeperpos.com
              </Link>
            </Text>
          </div>

          <div className={classes.groups}>
            <Grid gutter={32}>
              <Grid.Col span={{ base: 6, xs: 3 }}>
                <Stack gap="md">
                  <Text fw={700} className={classes.title}>
                    Product
                  </Text>
                  {footerLinks.product.map((link) => (
                    <Link key={link.link} href={link.link} className={classes.link}>
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid.Col>

              <Grid.Col span={{ base: 6, xs: 3 }}>
                <Stack gap="md">
                  <Text fw={700} className={classes.title}>
                    Support
                  </Text>
                  {footerLinks.support.map((link) => (
                    <Link key={link.link} href={link.link} className={classes.link}>
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid.Col>

              <Grid.Col span={{ base: 6, xs: 3 }}>
                <Stack gap="md">
                  <Text fw={700} className={classes.title}>
                    Company
                  </Text>
                  {footerLinks.company.map((link) => (
                    <Link key={link.link} href={link.link} className={classes.link}>
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid.Col>

              <Grid.Col span={{ base: 6, xs: 3 }}>
                <Stack gap="md">
                  <Text fw={700} className={classes.title}>
                    Legal
                  </Text>
                  {footerLinks.legal.map((link) => (
                    <Link key={link.link} href={link.link} className={classes.link}>
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid.Col>
            </Grid>
          </div>
        </div>

        <Divider my="xl" />

        <div className={classes.afterFooter}>
          <Text size="sm" c="dimmed">
            © {new Date().getFullYear()} Shopkeeper POS. All rights reserved.
          </Text>

          <Group gap="xs" className={classes.social}>
            <Link href="https://twitter.com/shopkeeperpos" className={classes.socialLink}>
              <IconBrandXFilled />
            </Link>
            <Link href="https://github.com/shopkeeperpos" className={classes.socialLink}>
              <IconBrandInstagramFilled />
            </Link>
            <Link href="https://linkedin.com/company/shopkeeperpos" className={classes.socialLink}>
              <IconBrandLinkedinFilled />
            </Link>
            <Link href="https://facebook.com/shopkeeperpos" className={classes.socialLink}>
              <IconBrandFacebookFilled />
            </Link>
          </Group>
        </div>
      </Container>
    </footer>
  );
}
