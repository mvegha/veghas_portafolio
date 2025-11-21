import { Code, Server, Database, Terminal } from 'lucide-react';

import type { Skill } from '../../interfaces/app/app';

const skills: Skill[] = [
  { name: 'Frontend', icon: Code, tools: 'React, TypeScript, Tailwind, Next.js' },
  { name: 'Backend', icon: Server, tools: 'Node.js, Express, Python, Django' },
  { name: 'Database', icon: Database, tools: 'PostgreSQL, MongoDB, Redis' },
  { name: 'DevOps', icon: Terminal, tools: 'Docker, AWS, Git Actions, Linux' }
];

export default skills;
