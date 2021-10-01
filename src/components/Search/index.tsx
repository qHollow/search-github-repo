import { ChangeEvent, FormEvent } from 'react';
import './style.css';

type SearchProps = {
	search: string;
	setSearch: (value: string) => void;
};

const Search = ({search, setSearch}: SearchProps) => {
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearch('');
	};
	return (
		<form className='search' onSubmit={onSubmit}>
			<input
				type='text'
				aria-label='Search'
				placeholder='Search...'
				className='search__input'
				name="search"
				onChange={onChange}
				value={search}
				autoComplete="off"
			/>
			<button type='submit' className='search__button'>
				Search
			</button>
		</form>
	);
};

export default Search;
