
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from './components/loginPage';
import SignUpPage from './components/SignUpPage';
import UserContext from './contexts/UserContext';
import { useState } from 'react';

function App() {
  const storedUser = JSON.parse(localStorage.getItem('storedUser'));
  const [user, setUser] = useState(storedUser); 

  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/sign-up" exact>
            <SignUpPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
