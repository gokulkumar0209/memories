const reducer = (posts = [], action) => {
	switch (action.type) {
		case "FETCH_ALL":
			return action.payload;
		case "CREATE":
			//temp need to create creating
			return posts;
		default:
			//temp
			return posts;
	}
};

export default reducer;
