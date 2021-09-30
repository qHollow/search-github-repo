import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './api/createApolloClient';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './assets/styles/index.css';

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={apolloClient}>
			<Router>
				<HelmetProvider>
					<App />
				</HelmetProvider>
			</Router>
		</ApolloProvider>
	</React.StrictMode>,
	document.querySelector('#root')
);
