import { createContext, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	return <AuthContext.Provider value={{ isAuthenticated: true }}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
	const context = useContext(AuthContext);
	return context;
};

export { AuthProvider, useAuth };
