export type Me = {
  email: string,
  first_name: string,
  last_name: string
}

export type MeContext = {
  user: Me,
  setUser: React.Dispatch<React.SetStateAction<Me>>,
  isLoggedIn: () => boolean
};
