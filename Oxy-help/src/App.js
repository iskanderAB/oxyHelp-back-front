import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            register
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
