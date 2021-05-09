import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './News/routes';

// Components
import Layout from '../components/Layout';

//Routes list
const Login = lazy(() => import('./News/pages/Home'));

const Routes: React.FC = () => {

  const scenes = (
    <Layout>
      <Switch>
        <Route path={routes.home.pattern} component={Login} />
      </Switch>
    </Layout>
  );

  return <BrowserRouter>{scenes}</BrowserRouter>;
};

export default Routes;
