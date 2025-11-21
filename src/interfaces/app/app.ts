import type { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  tools: string;
}
