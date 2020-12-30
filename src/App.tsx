import React, { useEffect, useState, useContext } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import NavbarComponent from './components/ui/Navbar';
import { UserContext } from './context/user';
import { Me } from './types/me';
import { useMe } from './api/me';

const App = () => {
  const [user, setUser] = useState<Me>({
    email: "",
    first_name: "",
    last_name: ""
  });

  const isLoggedIn = () => {
    return user.email !== "";
  };

  const me = useMe();

  useEffect(() => {
    if (me.data?.email != null && !me.isLoading) {
      console.log(me.data);
      setUser(me.data);
      console.log(user.email);
    }
  }, [me.isLoading]);

  if (me.isLoading) {
    return (
      <div className="d-flex flex-column align-items-center w-100 container mt-3">
        <h1>ServerStack</h1>
        <i className="fa fa-spinner fa-spin fa-lg fa-fw"></i>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (me.isError && me.error.response?.status !== 401) {
    return (
      <div className="d-flex flex-column align-items-center w-100 container mt-3">
        <h1>ServerStack</h1>
        <span className="text-danger">{me.error.response == null ? "Server offline" : me.error.message}</span>
      </div>
    );
  }

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser, isLoggedIn }}>
        <NavbarComponent />
        {isLoggedIn() ? <HomePage /> : <LoginPage />}
        <Switch>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
