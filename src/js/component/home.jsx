import React from "react";
import navbar from "./navbar.jsx";
import card from "./card.jsx";
import jumbotron from "./jumbotron.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<navbar />
			<jumbotron />
			<card />
			<footer />
		</div>
	);
};

export default Home;
