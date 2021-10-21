import { Switch, Route } from 'react-router-dom';
import { Modules } from '../pages/Modules';
import { SignIn } from '../pages/SignIn';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Modules} />
    <Route path="/admin" exact component={SignIn} />
  </Switch>
);
