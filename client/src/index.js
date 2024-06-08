import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

import rootReducer from "./reducers/rootReducer";
import App from "./App";
const middlewareEnhancer = applyMiddleware(thunk);
const composedEnhancer = compose(
	middlewareEnhancer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = configureStore({
	reducer: rootReducer,
	enhancer: composedEnhancer,
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
