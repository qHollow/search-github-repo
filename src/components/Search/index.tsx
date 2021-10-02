import { ChangeEvent, FormEvent } from 'react';
import './style.css';

type SearchProps = {
	search: string;
	setSearch: (value: string) => void;
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const Search = ({ search, setSearch, onSubmit }: SearchProps) => {
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};
	return (
		<form action="" className='search' onSubmit={onSubmit}>
			<input
				type='text'
				aria-label='Search'
				placeholder='Search...'
				className='search__input'
				name='search'
				onChange={onChange}
				value={search}
				autoComplete='off'
				id="smthng"
			/>
			<button type='submit' className='button'>
				Search
			</button>
		</form>
	);
};

export default Search;
