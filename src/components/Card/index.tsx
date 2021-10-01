import { Link } from 'react-router-dom';
import './style.css';

const Card = () => {
	return (
		<div className='card'>
			<Link to='/' className='card__link'>
				RepoName/RepoAutor
			</Link>
			<p className='card__description'>
				Description of repo... Lorem ipsum dolor sit, amet consectetur
				adipisicing elit. Beatae inventore fuga, facere dolore voluptates
				officia commodi suscipit deserunt saepe minima placeat sapiente impedit
				modi magnam corporis consequuntur at? Illo, consectetur.
			</p>
			<div className='card__wrapper'>
				<div className='card__star'>
					<svg
            className="card__svg"
						aria-label='star'
						role='img'
						height='16'
						viewBox='0 0 16 16'
						version='1.1'
						width='16'
						data-view-component='true'
					>
						<path
							fillRule='evenodd'
							d='M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z'
						></path>
					</svg>
					10.2 k
				</div>
				<div className='card__wrapper card__wrapper--no-gap'>
					<span
						className='card__color'
						style={{ backgroundColor: `#FFF` }}
					></span>
					<span className='card__language'>TypeScript</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
