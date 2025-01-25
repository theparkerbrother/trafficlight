import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const [selectedLight, setSelectedLight] = useState("red");

	const getBoxShadow = (color) => {
		switch (color) {
		  case "red":
			return "0 0px 20px rgba(61, 0, 0, 0.8), 0 0px 40px rgba(61, 0, 0, 0.5)";
		  case "yellow":
			return "0 0px 20px rgba(102, 102, 0, 0.8), 0 0px 40px rgba(102, 102, 0, 0.5)";
		  case "green":
			return "0 0px 20px rgba(29, 73, 9, 0.8), 0 0px 40px rgba(29, 73, 9, 0.5)";
		  default:
			return "0 0px 20px rgba(255, 255, 255, 0.8), 0 0px 40px rgba(255, 255, 255, 0.5)";
		}
	  };

	return (
		<div className="d-flex flex-column align-items-center">
			<div id="trafficTop"></div>
			<div id="lightContainer" className="d-flex flex-column align-items-center justify-content-around">
			<div
				className={`red light ${selectedLight === "red" ? "selected" : ""}`}
				onClick={() => setSelectedLight("red")}
				style={{ boxShadow: selectedLight === "red" ? getBoxShadow("red") : "" }}
			></div>
			<div
				className={`yellow light ${selectedLight === "yellow" ? "selected" : ""}`}
				onClick={() => setSelectedLight("yellow")}
				style={{ boxShadow: selectedLight === "yellow" ? getBoxShadow("yellow") : "" }}
			></div>
			<div
				className={`green light ${selectedLight === "green" ? "selected" : ""}`}
				onClick={() => setSelectedLight("green")}
				style={{ boxShadow: selectedLight === "green" ? getBoxShadow("green") : "" }}
			></div>
			</div>
		</div>
	);
};

export default Home;