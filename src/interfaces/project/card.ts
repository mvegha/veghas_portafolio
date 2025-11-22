import type { Project } from '../../interfaces/app/app';

export interface CardProps {
  project: Project;
  extensionismoDiagram: string;
  isExpanded: boolean;
  onToggle: () => void;
}
