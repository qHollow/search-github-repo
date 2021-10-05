export interface test {
  node: ICurrentItem;
}

export interface ICurrentItem {
  node: INode;
}

export interface INode {
  name: string;
  description: string;
  stargazerCount: number;
  issues: IIssues;
  languages: ILanguageNodes;
  primaryLanguage: ILanguage;
  pullRequests: IPullRequests;
  owner: IOwner;
}

export interface ILanguageNodes {
  nodes: Array<ILanguage>
}

export interface ILanguage {
  color: string;
  name: string;
}

export interface IOwner {
	login: string;
}

export interface IPullRequests {
  totalCount: number;
}

export interface IIssues {
  totalCount: number;
}