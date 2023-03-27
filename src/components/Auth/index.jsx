import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { auth } from '../../firebase';

const Auth = () => {
	const [userName, setUserName] = React.useState('');

	React.useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (user) {
				setUserName(user.displayName);
			} else setUserName('');
		});
	}, []);
	const myauth = { token: 'null' };

	if (!myauth.token) {
		return <Navigate to="/login" />;
	}
	return <Outlet />;
};

export default Auth;
