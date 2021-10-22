import { Switch } from 'react-router-dom';
import { Modules } from '../pages/Modules';
import { SignIn } from '../pages/SignIn';
import { Admin } from '../pages/Admin';
import { Route } from './Route';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Modules} />
    <Route path="/acess" component={SignIn} />
    <Route path="/admin" component={Admin} isPrivate />
  </Switch>
);
