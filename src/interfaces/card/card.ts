import type { LucideIcon } from 'lucide-react';

export interface StackItem {
  angle: number;
  label: string;
  text: string;
  icon?: LucideIcon;
  shortText?: string;
  color: string;
  bg: string;
}
