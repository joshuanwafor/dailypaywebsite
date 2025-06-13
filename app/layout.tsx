import '@mantine/core/styles.css';
import "./style.css"
import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const metadata = {
  title: 'Your POS Solution',
  description: 'Modern and reliable POS solution for your business',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <MantineProvider theme={theme}>
          <Header />
          <main style={{ flex: 1, overflow:"hidden" }}>{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
