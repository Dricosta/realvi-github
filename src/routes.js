import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main'
import Commits from './pages/Commits'
import Repository from './pages/Repository'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/repository" component={Repository} />
            <Route path="/commits" component={Commits} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
