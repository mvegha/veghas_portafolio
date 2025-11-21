export interface Availability {
  status: 'available' | 'unavailable' | 'preorder';
  text: string;
}

export interface AvailabilityConfig {
  status: Availability['status'];
  options: Availability[];
}
