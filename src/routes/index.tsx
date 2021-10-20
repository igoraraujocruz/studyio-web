import { Switch, Route } from 'react-router-dom';
import { Modulos } from '../components/Modulos';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Modulos} />
  </Switch>
);
