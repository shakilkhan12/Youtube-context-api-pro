import UsersList from './components/UsersList';
import PostsList from './components/PostsList';
import Header from './components/Header';
import Providers from './store/';
function App() {
	return (
		<Providers>
			<Header />
			<UsersList />
			<PostsList />
		</Providers>
	);
}

export default App;
