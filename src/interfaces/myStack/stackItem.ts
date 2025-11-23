import type { LucideIcon } from 'lucide-react';

export interface StackItemProps {
  angle: number;
  label: string;
  text: string;
  icon?: LucideIcon;
  shortText?: string;
  color: string;
  bg: string;
}
