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

export default function AboutPage() {
  return (
    <>
      <PageHeaderSection
        title="About Us"
        caption="Learn more about DailyPay and our mission"
        badge="About"
      />
    </>
  );
}
