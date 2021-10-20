import { Switch, Route } from 'react-router-dom';
import { Modulos } from '../components/Modulos';
import { Logon } from '../pages/Logon';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Modulos} />
    <Route path="/admin" exact component={Logon} />
  </Switch>
);
