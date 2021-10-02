import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { loader } from 'graphql.macro';
import Loader from '../../components/Loader';
import Table from '../../components/Table';
import './style.css';

const GetCurrentRepository = loader(
	'../../api/queries/GetCurrentRepository.query.graphql'
);

const InfoPage = (props: any) => {

	const history = useHistory();

	const { data, loading } = useQuery(GetCurrentRepository, {
		variables: { id: props.match.params.id },
	});

	return (
		<div className='info-page'>
			<Helmet>
				<title>Information | Search GitHub repositories</title>
			</Helmet>
			<h1 className='visually-hidden'>Information page</h1>
			<button onClick={history.goBack} className="button">Back</button>
			{!loading ? <Table data={data} /> : <Loader />}
		</div>
	);
};

export default InfoPage;
