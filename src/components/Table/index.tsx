import './style.css';

const Table = ({ data }: any) => {
	const {
		issues: { totalCount },
		stargazerCount,
		name,
		primaryLanguage,
		owner: { login },
		description,
		pullRequests: { totalCount: pullRequestsCount },
		languages: { nodes },
	} = data.node;
	return (
		<table className="table">
			<thead>
				<tr>
					<th colSpan={2}>Repository information:</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Owner:</td>
					<td>{login}</td>
				</tr>
				<tr>
					<td>Repository name:</td>
					<td>{name}</td>
				</tr>
				<tr>
					<td>Repository descriprion:</td>
					<td>{description}</td>
				</tr>
				<tr>
					<td>Primary language:</td>
					<td>
						<span
							style={{ backgroundColor: primaryLanguage.color }}
							className='language__color'
						></span>
						{primaryLanguage.name}
					</td>
				</tr>
				<tr>
					<td>Stargaze count:</td>
					<td>{stargazerCount}</td>
				</tr>
				<tr>
					<td>Pull request count:</td>
					<td>{pullRequestsCount}</td>
				</tr>
				<tr>
					<td>Issue count:</td>
					<td>{totalCount}</td>
				</tr>
				<tr>
					<td>All used languages: </td>
					<td>
						{nodes.map((el: any) => (
							<div className="language" key={el.name}>
								<span
									className='language__color'
									style={{ backgroundColor: el.color }}
								></span>
								{el.name}
							</div>
						))}
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Table;
