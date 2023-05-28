import React, { useEffect } from 'react';

import { addNewNote } from '../firebase/LoginPage';

import '../styles/loginPage.css';

function LoginPage() {

	useEffect(() => {
		addNewNote()
	}, []);

	return (
		<div id="loadingIcon">
			<div className="lds-spinner">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export default LoginPage;
