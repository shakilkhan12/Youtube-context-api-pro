import { UsersProvider, PostsProvider } from './providers';
const Providers = (props) => {
	return (
		<UsersProvider>
			<PostsProvider>{props.children}</PostsProvider>
		</UsersProvider>
	);
};
export default Providers;
