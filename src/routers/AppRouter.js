import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../components/App';
import PeopleList from '../components/PeopleList';
import NotFoundPage from '../components/NotFoundPage';
import PeopleInfoItem from '../components/PeopleInfoItem';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route path="/searched" component={PeopleList} />
                <Route path="/selected/:id" component={PeopleInfoItem} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;

