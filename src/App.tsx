import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout';
import UserSearchPage from './pages/userSearch';
import AccountSearchPage from './pages/accountSearch';
import Notification from './components/common/Notification'

import 'antd/dist/antd.css';
import './global.scss'

function App() {
  return (
    <>
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={UserSearchPage} />
          <Route path='/accounts/:userId' component={AccountSearchPage} />
        </Switch>
      </Layout>
    </Router>
    <Notification></Notification>
    </>
  );
}

export default App;
