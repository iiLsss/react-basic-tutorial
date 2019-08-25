import React from 'react'
import { BrowserRouter , Switch, Route, Redirect } from 'react-router-dom';

import Home from '../views/Home'
import Custom from '../views/Custom'
import Plan from '../views/Plan'

export default () =>  (
    <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/custom' component={Custom} />
          <Route path='/plan' component={Plan} />
          <Redirect to='/?lx=unsafe' />
        </Switch>
    </BrowserRouter>
  )



