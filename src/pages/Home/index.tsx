import { useState, FormEvent } from 'react';
import { useLazyQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { Helmet } from 'react-helmet-async';
import Loader from '../../components/Loader';
import List from '../../components/List';
import Search from '../../components/Search';
import './style.css';

const SearchItems = loader('../../api/queries/SearchItems.graphql');

const Home = () => {
	const [search, setSearch] = useState('');
	
	const [getData, { loading, data }] = useLazyQuery(SearchItems);

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		getData({ variables: {query: search, first: 10}});
	};

	return (
		<div className="home">
			<Helmet>
				<title>Home | Search GitHub repositories</title>
			</Helmet>
			<h1 className="visually-hidden">Search page</h1>
			<Search search={search} setSearch={setSearch} onSubmit={onSubmit} />
			{
				!loading ? <List data={data} /> : <Loader />	
			}
		</div>
	);
};

export default Home;