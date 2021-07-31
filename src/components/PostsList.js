import { useContext, useEffect } from 'react';
import { postsContext } from '../store/contexts';
import { getPosts } from '../store/actions';
const PostsList = () => {
	const { postsState, dispatch } = useContext(postsContext);
	useEffect(() => {
		getPosts({ dispatch });
	}, []);
	console.log('posts list:', postsState);
	return (
		<>
			<h1>Posts list length: {postsState.posts.length}</h1>
		</>
	);
};
export default PostsList;
