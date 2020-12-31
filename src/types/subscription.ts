type Product = {
  id: string;
  created: number;
  name: string;
  images: string[];
};

type Plan = {
  amount: number;
  interval: string;
  currency: string;
  product: Product;
};

type Subscription = {
  current_period_end: number;
  current_period_start: number;
  days_until_due: number;
  status: string;
  plan: Plan;
};

export type { Subscription };
