import { Helmet } from 'react-helmet-async';

const InfoPage: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Information | Search GitHub repositories</title>
			</Helmet>
			<h1>Information page</h1>
		</>
	);
};

export default InfoPage;
