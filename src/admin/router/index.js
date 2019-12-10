import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../views/Home'
import Manage from '../views/Manage'
import Center from '../views/Center'
import BlackSon from '../views/BlackSon'

export default () =>  (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/manage' component={Manage} />
    <Route path='/center' component={Center} />
    <Route path='/blackson' component={BlackSon} />
    <Redirect to='/?lx=unsafe' />
  </Switch>
  )



