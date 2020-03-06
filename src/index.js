import React from "react";
import ReactDOM from "react-dom";
import './assets/scss/main.scss'

import Profile from "./blocks/profile/profile.js";

const App = () => {
		return <Profile />
};

ReactDOM.render(<App/>, document.querySelector(".content"));