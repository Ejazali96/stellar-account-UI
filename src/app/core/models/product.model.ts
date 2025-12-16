export interface Product {
  id: string;
  // Original fields
  name: string;
  title: string;
  description: string;
  status: ProductStatus;
  deviceInfo: string;
  actions: ProductAction[];

  // New UI fields
  icon: string; // Required for new UI
  subtitle?: string; // Optional
  link?: string; // For "Learn more"
}

export enum ProductStatus {
  ACTIVE = 'Active',
  ENABLED = 'Enabled',
  INACTIVE = 'Inactive'
}

export interface ProductAction {
  label: string;
  primary?: boolean;
  action: string;
}
