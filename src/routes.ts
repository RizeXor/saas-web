import { Route } from './types/route';

export const guestRoutes: Route[] = [
  {
    to: "/",
    label: "Login"
  }
];

export const loggedInRoutes: Route[] = [
  {
    to: "/",
    label: "Home"
  }
];
