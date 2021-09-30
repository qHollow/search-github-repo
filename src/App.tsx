import { Switch, Route } from 'react-router';
import Home from './pages/Home';
import InfoPage from './pages/Information';
import NotFound from './pages/NotFound';

const App = () => {
	return (
		<main>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/info/:id' component={InfoPage} exact />
				<Route component={NotFound} />
			</Switch>
		</main>
	);
};

export default App;
