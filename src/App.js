import React, {useState} from 'react';
import './App.css';
import Layout from './Components/Layout';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Planning from '../src/Components/Planning/Planning';
import Login from '../Login/Login';
import Preferences from '../src/Components/Preferences/Preferences';



function App() {
  const [token, setToken] = useState();
  
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (


    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/planning">
              <Planning />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
    
  );
}




export default App;
