import './style.css';

const Loader = () => {
	return (
		<div className="wrapper">
			<div className='lds-ring'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loader;
