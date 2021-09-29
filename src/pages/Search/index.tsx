import { Helmet } from 'react-helmet-async';

const SearchPage: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Home | Search GitHub repositories</title>
			</Helmet>
			<h1>Search page</h1>
		</>
	);
};

export default SearchPage;
