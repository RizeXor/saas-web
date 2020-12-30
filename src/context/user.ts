import React, { useState } from 'react';
import { Me, MeContext } from '../types/me';

const UserContext = React.createContext<MeContext>({
  user: {
    email: "",
    first_name: "",
    last_name: ""
  },
  setUser: () => { },
  isLoggedIn: () => { return false; }
});

export { UserContext };
