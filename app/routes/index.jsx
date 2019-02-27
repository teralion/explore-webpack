import React from 'react';
import history from 'app/utils/history';
import { Router, Route, Switch } from 'react-router-dom';

import HomePage from 'app/pages/HomePage';
import AboutPage from 'app/pages/AboutPage';
import NotFoundPage from 'app/pages/PagesXXX/404';
import ChatPage from 'app/pages/ChatPage';

export default function AppRouter() {
  return (
    <Router history={ history }>
      <Switch>
        <Route path="/" component={ HomePage } exact />
        <Route path="/about" component={ AboutPage } />
        <Route path="/chat" component={ ChatPage } />
        <Route component={ NotFoundPage } />
      </Switch>
    </Router>
  );
};
