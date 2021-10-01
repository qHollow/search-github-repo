import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import List from '../../components/List';
import Search from '../../components/Search';
import './style.css';

const Home = () => {
	const [search, setSearch] = useState('');
	return (
		<div>
			<Helmet>
				<title>Home | Search GitHub repositories</title>
			</Helmet>
			<h1 className="visually-hidden">Search page</h1>
			<Search search={search} setSearch={setSearch} />
			<List />
		</div>
	);
};

export default Home;
