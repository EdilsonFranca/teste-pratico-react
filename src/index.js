import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import RiaYou from './Pages/RiaYou/RiaYou';
import News from './Pages/News/News';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/NotFound/NotFound';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/ria-you' component={RiaYou} />
          <Route path='/news' component={News} />
          <Route path='/blog' component={Blog} />
          <Route component={NotFound} />
          </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
