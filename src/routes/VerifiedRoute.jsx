import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const VerifiedRoute = ({ component: Component, isPrivate = false, ...rest }) => {
	const { isAuthenticated } = useAuth();
	console.log('isAuth ', isAuthenticated, isPrivate);

	// return (
	// 	<Route
	// 		{...rest}
	// 		render={props => {
	// 			return isAuthenticated ? (
	// 				<Component />
	// 			) : (
	// 				<Redirect to={{ pathname: '/', state: { from: props.location } }} />
	// 			);
	// 		}}
	// 	/>
	// );
	return (
		<Route
			{...rest}
			render={props => {
				if (
					(isAuthenticated && isPrivate) ||
					(!isAuthenticated && !isPrivate) ||
					(isAuthenticated && !isPrivate)
				) {
					return <Component {...props} />;
				} else if (!isAuthenticated && isPrivate) {
					return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
				}
			}}
		/>
	);
};

export default VerifiedRoute;
