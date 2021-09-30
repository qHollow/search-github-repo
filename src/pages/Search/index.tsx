import { Helmet } from 'react-helmet-async';
import './style.css';

const SearchPage: React.FC = () => {
	return (
		<div className="">
			<Helmet>
				<title>Home | Search GitHub repositories</title>
			</Helmet>
			<h1 className="visually-hidden">Search page</h1>
		</div>
	);
};

export default SearchPage;
