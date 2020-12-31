export type Product = {
  id: string;
  description: string | null;
  name: string;
  active: boolean;
  images: string[];
  prices: Price[];
};

export type Recurring = {
  interval: string;
};

export type Price = {
  id: string;
  active: boolean;
  unit_amount: number;
  currency: string;
  recurring: Recurring;
};
