import { BrowserRouter as Router, Switch } from 'react-router-dom';
import VerifiedRoute from './VerifiedRoute';
import Products from './../pages/Products';
import ItemDetails from './../pages/ItemDetails';
import Protected from './../pages/Protected';

const Routes = () => (
	<Router>
		<Switch>
			<VerifiedRoute path='/' exact component={Products} />
			<VerifiedRoute path='/details/:id' component={ItemDetails} />
			<VerifiedRoute path='/protected' component={Protected} isPrivate />
		</Switch>
	</Router>
);

export default Routes;
