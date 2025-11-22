import { Code, Server, Database, Terminal } from 'lucide-react';

import type { Skill } from '../../interfaces/app/app';

const skills: Skill[] = [
  { name: 'Frontend', icon: Code, tools: 'React, TypeScript, Tailwind, React Native' },
  { name: 'Backend', icon: Server, tools: 'Node, Express, Nest, Python, Web Scraping' },
  { name: 'Database', icon: Database, tools: 'PostgreSQL, SQL Server, MySQL,SQLite, MongoDB, Dynamo' },
  { name: 'DevOps', icon: Terminal, tools: 'Docker, AWS, Git Actions, Linux' }
];

export default skills;
