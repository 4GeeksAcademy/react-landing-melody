import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer"

//include images into your bundle
import imagecap from "../../img/imagecap.png";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			
			<div className="card-group p-5 gap-4 h-100 col-11 m-auto">
			<Card 
				title={"Card Title"}
				url={imagecap}
				body={
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sit praesentium laudantium voluptas ipsa tempora labore minima temporibus."
				}
				buttonUrl={"#"}
				buttonLabel={"Find Out More!"}/>
			<Card 
				title={"Card Title"}
				url={imagecap}
				body={
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sit praesentium laudantium voluptas ipsa tempora labore minima temporibus."
				}
				buttonUrl={"#"}
				buttonLabel={"Find Out More!"}/>
			<Card 
				title={"Card Title"}
				url={imagecap}
				body={
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sit praesentium laudantium voluptas ipsa tempora labore minima temporibus."
				}
				buttonUrl={"#"}
				buttonLabel={"Find Out More!"}/>
			<Card 
				title={"Card Title"}
				url={imagecap}
				body={
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sit praesentium laudantium voluptas ipsa tempora labore minima temporibus."
				}
				buttonUrl={"#"}
				buttonLabel={"Find Out More!"}/>
		</div>
			<Footer />
		</div>
	);
};

export default Home;
