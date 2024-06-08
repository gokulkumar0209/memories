import axios from "axios";

const url = "http://localhost:5000/posts";

const fetchPosts =async () => {
	return await axios.get(url);
};
export default fetchPosts