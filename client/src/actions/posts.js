import * as api from "../api";

// Action Creators

const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		// const diapatch
		dispatch({ type: "FETCH_ALL", payload: data });
	} catch (error) {
		console.log(error);
	}
};
export default getPosts;
