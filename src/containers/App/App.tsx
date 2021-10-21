import React from 'react';
import { Switch, Redirect, useLocation, Route } from 'react-router';
import classNames from 'classnames/bind';
import { AppRoute } from 'utils/routes';
import FocusVisibility from 'components/FocusVisibility';
import HomePage from 'containers/HomePage';
import styles from './App.module.scss';

const cx = classNames.bind(styles);

const App: React.FC = () => {
  const location = useLocation();
  const appClasses = cx('app');

  return (
    <div className={appClasses} id="app">
      <Switch location={location} key={location.pathname}>
        <Route exact path={AppRoute.Base} component={HomePage} />
        <Redirect to={AppRoute.Base} />
      </Switch>
      <FocusVisibility />
    </div>
  );
};

export default App;
