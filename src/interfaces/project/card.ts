import type { ProjectProps } from './project';

export interface CardProps {
  project: ProjectProps;
  extensionismoDiagram: string;
  isExpanded: boolean;
  onToggle: () => void;
}
