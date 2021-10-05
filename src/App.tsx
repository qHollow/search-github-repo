import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { Switch, Route } from 'react-router';
import { loader } from 'graphql.macro';
import { ISearchedItems } from './interfaces/searchItems';
import Home from './pages/Home';
import InfoPage from './pages/Information';
import NotFound from './pages/NotFound';


const SearchItems = loader('./api/queries/SearchItems.graphql');

interface ISearchedItemsVars {
	query: string;
	first: number;
	cursor?: string;
}

const App = () => {
	const [search, setSearch] = useState('');
	const [getData, { loading, data, fetchMore, error }] = useLazyQuery<ISearchedItems, ISearchedItemsVars>(SearchItems, {
		notifyOnNetworkStatusChange: true,
	});
	if(error) alert(error);
	return (
		<main>
			<Switch>
				<Route path='/' exact>
					<Home data={data!} getData={getData} search={search} setSearch={setSearch} loading={loading} fetchMore={fetchMore} />
				</Route>
				<Route path='/info/:id' component={InfoPage} exact />
				<Route component={NotFound} />
			</Switch>
		</main>
	);
};

export default App;
