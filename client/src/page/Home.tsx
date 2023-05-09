import Hello from '../components/Hello';

const Home = () => (
	<div
		style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			minHeight: '100vh',
		}}
	>
		<Hello />
	</div>
);

export default Home;
