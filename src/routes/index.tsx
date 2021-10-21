import { Switch, Route } from 'react-router-dom';
import { Modulos } from '../components/Modulos';
import { SignIn } from '../pages/SignIn';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Modulos} />
    <Route path="/admin" exact component={SignIn} />
  </Switch>
);
