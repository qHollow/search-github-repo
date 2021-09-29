import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: process.env.REACT_APP_APOLLO_URI,
});

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
		},
	};
});

const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
	connectToDevTools: true,
});

export default apolloClient;
