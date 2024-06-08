import fetchPosts from "../api/api";

// Action Creators

const getPosts = () => async (dispatch) => {
	try {
		const data = await fetchPosts();
		const res = await data.data;
		console.log("i am the data:", res);
		// const diapatch
		dispatch({ type: "FETCH_ALL", payload: res });
	} catch (error) {
		console.log(error);
	}
};
export default getPosts;
