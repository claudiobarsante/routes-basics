import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';
import ItemDetails from './pages/ItemDetails';
import Products from './pages/Products';
import Protected from './pages/Protected';

function App() {
	return (
		<>
			<Header />
			<Router>
				<AuthProvider>
					<Switch>
						<Route path='/' exact component={Products} />
						<Route path='/details/:id' component={ItemDetails} />
						<Route path='/protected/' component={Protected} />
					</Switch>
				</AuthProvider>
			</Router>
		</>
	);
}

export default App;
