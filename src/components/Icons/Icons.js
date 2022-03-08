import './Icons.css';

const Icons = ({ iconsSubClass, iconSubClass }) => {
	return (
		<div className={`icons ${iconsSubClass}`}>
			<a
				href='https://www.facebook.com/grzegorz.wirtek/'
				target='_blank'
				rel='noreferrer noopener'>
				<img
					src='/images/facebook-brands.svg'
					alt='Facebook icon'
					className={`icon ${iconSubClass}`}
					title='Facebook'
				/>
			</a>

			<a
				href='https://www.instagram.com/grzegorz.wirtek/'
				target='_blank'
				rel='noreferrer noopener'>
				<img
					src='/images/instagram-brands.svg'
					alt='Instagram icon'
					className={`icon ${iconSubClass}`}
					title='Instagram'
				/>
			</a>

			<a
				href='https://github.com/GrzegorzWirtek'
				target='_blank'
				rel='noreferrer noopener'>
				<img
					src='/images/github-brands.svg'
					alt='Github icon'
					className={`icon ${iconSubClass}`}
					title='Github'
				/>
			</a>
		</div>
	);
};

export default Icons;
