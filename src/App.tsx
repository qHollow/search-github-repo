import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { Switch, Route } from 'react-router';
import { loader } from 'graphql.macro';
import Home from './pages/Home';
import InfoPage from './pages/Information';
import NotFound from './pages/NotFound';


const SearchItems = loader('./api/queries/SearchItems.graphql');

const App = () => {
	const [search, setSearch] = useState('');
	const [getData, { loading, data, fetchMore }] = useLazyQuery(SearchItems, {
		notifyOnNetworkStatusChange: true,
	});
	return (
		<main>
			<Switch>
				<Route path='/' exact>
					<Home data={data} getData={getData} search={search} setSearch={setSearch} loading={loading} fetchMore={fetchMore} />
				</Route>
				<Route path='/info/:id' component={InfoPage} exact />
				<Route component={NotFound} />
			</Switch>
		</main>
	);
};

export default App;
