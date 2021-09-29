import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './api/createApolloClient';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={apolloClient}>
			<Router>
				<App />
			</Router>
		</ApolloProvider>
	</React.StrictMode>,
	document.querySelector('#root')
);
