const style = {
	root: (backgroundImage: string) => ({
		width: '100%',
		minHeight: '100vh',
		backgroundColor: 'transparent',
		backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backgroundImage})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'top left',
		backgroundSize: 'cover',
	}),
};

export default style;
