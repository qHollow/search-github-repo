import { FormEvent, SyntheticEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import Loader from '../../components/Loader';
import List from '../../components/List';
import Search from '../../components/Search';
import { ISearchedItems } from '../../interfaces/searchItems';
import './style.css';

type Props = {
	loading: boolean;
	search: string;
	data: ISearchedItems;
	setSearch: (value: string) => void;
	getData: (options: object) => void;
	fetchMore: any;
};

const Home = ({
	search,
	setSearch,
	data,
	getData,
	fetchMore,
	loading,
}: Props) => {
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		getData({ variables: { query: search, first: 10 } });
	};

	const onMore = (e: SyntheticEvent<HTMLButtonElement>) => {
		if (!loading) {
			fetchMore({
				variables: {
					query: search,
					first: 10,
					cursor: data?.search?.edges[data?.search.edges!.length - 1].cursor,
				},
				updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
					fetchMoreResult.search.edges = [
						...prevResult.search.edges,
						...fetchMoreResult.search.edges,
					];
					return fetchMoreResult;
				},
			});
		}
	};

	return (
		<div className='home'>
			<Helmet>
				<title>Home | Search GitHub repositories</title>
			</Helmet>
			<h1 className='visually-hidden'>Search page</h1>
			<Search search={search} setSearch={setSearch} onSubmit={onSubmit} />
			{loading && !data ? <Loader /> : <List data={data} />}
			{data?.search?.edges?.length > 0 ? (
				<button className='button button-lg button-mg' onClick={onMore}>
					Load more
				</button>
			) : null}
		</div>
	);
};

export default Home;
