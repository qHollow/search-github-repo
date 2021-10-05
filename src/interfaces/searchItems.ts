export interface ISearchedItems {
	search: ISearch;
}

export interface ISearch {
	edges: Array<IEdges>;
}

export interface IEdges {
	cursor: string;
	node: Array<INodes>;
}

export interface INodes {
	id: string;
	stargazerCount: number;
	name: string;
	description: string;
	owner: Array<IOwner>;
	primaryLanguage: Array<IPrimaryLanguage>
}

export interface IOwner {
	login: string;
}

export interface IPrimaryLanguage {
	name: string;
	color: string;
}
