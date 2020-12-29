import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import NavbarComponent from './components/ui/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Router>
        <NavbarComponent />
        <Switch>
          <Route component={HomePage} path='/' exact></Route>
          <Route component={LoginPage} path='/login' exact></Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
