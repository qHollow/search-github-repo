import { Helmet } from 'react-helmet-async';
import { Link, useHistory } from 'react-router-dom';
import './style.css';

const NotFound = () => {
	const history = useHistory();
	return (
		<div className='not-found'>
			<Helmet>
				<title>Error | Search GitHub repositories</title>
			</Helmet>
			<h1 className='not-found__title'>Sorry... Something was wrong</h1>
			<div className='not-found__wrapper'>
				<button onClick={history.goBack} className='button button-lg'>
					Go back
				</button>
				<Link to='/' className='not-found__link'>
					Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
