import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import ItemDetails from './pages/ItemDetails';
import Products from './pages/Products';

function App() {
	return (
		<>
			<Header />
			<Router>
				<Switch>
					<Route path='/' exact component={Products} />
					<Route path='/details/:id' component={ItemDetails} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
