import React from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

import Layout from './components/Layout';
import UserSearchPage from './pages/userSearch';
import AccountSearchPage from './pages/accountSearch';
import LoginPage from './pages/loginPage'
import Notification from './components/common/Notification'
import { useSelector } from 'react-redux';
import GlobalLoading from './components/common/GlobalLoading';

import 'antd/dist/antd.css';
import './global.scss'

function App() {
  // @ts-ignore
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  // @ts-ignore
  const isGlobalLoading = useSelector(state => state.auth.isGlobalLoading)
  if(!isAuthenticated){
    return (
      <>
      <LoginPage></LoginPage>
      {
        isGlobalLoading && (
          <GlobalLoading />
        )
      }
      <Notification></Notification>
      </>
    )
  }
  return (
    <>
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={UserSearchPage}/> 
          <Route path='/accounts/:userId' component={AccountSearchPage} />
        </Switch>
      </Layout>
    </Router>
    <Notification></Notification>
    </>
  );
}

export default App;
