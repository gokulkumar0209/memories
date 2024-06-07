import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
function App() {
	// const dispatch=useDispatch()
	// useEffect(()=>{
	// 	dispatch(getPosts())
	// },[])
	return (
		<>
			<h1 className=" text-blue-700">APP</h1>
			<Posts />
			<Form />
		</>
	);
}

export default App;
