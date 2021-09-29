import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';

const NotFound: React.FC = () => {
	const history = useHistory();
	return (
		<div>
			<Helmet>
				<title>Not found | Search GitHub repositories</title>
			</Helmet>
			<h1>Sorry... Something was wrong</h1>
			<button onClick={() => history.goBack()}>Back</button>
			<Link to='/'>Home</Link>
		</div>
	);
};

export default NotFound;
