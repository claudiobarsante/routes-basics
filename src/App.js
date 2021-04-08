import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';

import Routes from './routes';

function App() {
	return (
		<>
			<Header />

			<AuthProvider>
				<Routes />
			</AuthProvider>
		</>
	);
}

export default App;
