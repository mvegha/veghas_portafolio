import { Code, Server, Database, Terminal } from 'lucide-react';

import type { SkillProps } from '../../interfaces/skill/skills';

const skills: SkillProps[] = [
  { name: 'Frontend', icon: Code, tools: 'React, TypeScript, Tailwind, React Native' },
  { name: 'Backend', icon: Server, tools: 'Node, Express, Nest, Python, Web Scraping' },
  { name: 'Database', icon: Database, tools: 'PostgreSQL, SQL Server, MySQL,SQLite, MongoDB, Dynamo' },
  { name: 'DevOps', icon: Terminal, tools: 'Docker, AWS, Git Actions, Linux' }
];

export default skills;
