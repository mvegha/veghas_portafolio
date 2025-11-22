import { Smartphone, Globe, Server, Cloud, Database } from 'lucide-react';

import type { StackItem } from '../../interfaces/card/card';

export const stackItems: StackItem[] = [
  {
    angle: 233,
    label: 'Stack',
    text: 'TypeScript',
    shortText: ' TS ',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    angle: 210,
    label: 'Mobile',
    text: 'React Native',
    icon: Smartphone,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10'
  },
  {
    angle: 190,
    label: 'Frontend',
    text: 'React.js',
    icon: Globe,
    color: 'text-sky-500',
    bg: 'bg-sky-500/10'
  },
  {
    angle: 170,
    label: 'Backend',
    text: 'Node.js',
    icon: Server,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  {
    angle: 150,
    label: 'Cloud',
    text: 'AWS',
    icon: Cloud,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  },
  {
    angle: 127,
    label: 'Datos',
    text: 'SQL/NoSQL',
    icon: Database,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10'
  }
];
