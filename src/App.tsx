import { Switch, Route } from 'react-router';
import SearchPage from './pages/Search';
import InfoPage from './pages/Information';
import NotFound from './pages/NotFound';

const App = () => {
	return (
		<main>
			<Switch>
				<Route path='/' component={SearchPage} exact />
				<Route path='/info/:id' component={InfoPage} exact />
				<Route component={NotFound} />
			</Switch>
		</main>
	);
};

export default App;
