import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Search from '../../components/Search';
import './style.css';

const Home: React.FC = () => {
	const [search, setSearch] = useState('');
	return (
		<div className="">
			<Helmet>
				<title>Home | Search GitHub repositories</title>
			</Helmet>
			<h1 className="visually-hidden">Search page</h1>
			<Search search={search} setSearch={setSearch} />
		</div>
	);
};

export default Home;
