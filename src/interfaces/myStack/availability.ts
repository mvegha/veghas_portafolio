export interface AvailabilityProps {
  status: 'available' | 'unavailable' | 'preorder';
  text: string;
}

export interface AvailabilityConfigProps {
  status: AvailabilityProps['status'];
  options: AvailabilityProps[];
}
