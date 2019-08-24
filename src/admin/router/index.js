import { BrowserRouter , Switch, Route, Redirect } from 'react-router-dom';

export const Router = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/custom' component={Custom} />
          <Route path='/plan' component={Plan} />
          <Redirect to='/?lx=unsafe' />
        </Switch>
    </BrowserRouter>
  )
}



