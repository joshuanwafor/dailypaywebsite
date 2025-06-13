'use client';

import { Container, Title, Text, Stack, Badge } from '@mantine/core';
import classes from './PageHeaderSection.module.css';

interface PageHeaderSectionProps {
  title: string;
  caption?: string;
  badge?: string;
}

export default function PageHeaderSection({ title, caption, badge }: PageHeaderSectionProps) {
  return (
    <div className={classes.header}>
      <Container size="lg">
        <Stack align="center" py={80} gap={0}>
          {badge && <Badge variant="filled" size="lg">{badge}</Badge>}
          <Title className={classes.title} ta="center">
            {title}
          </Title>
          {caption && (
            <Text c="dimmed" ta="center" maw={600} size="lg">
              {caption}
            </Text>
          )}
        </Stack>
      </Container>
    </div>
  );
}
