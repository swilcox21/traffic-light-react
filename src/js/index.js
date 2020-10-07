//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { Trafficlight } from "./component/trafficlight";

//render your react application
var previousColor = "red";
function changeLight() {
	if (previousColor == "red") {
		previousColor = "green";
	} else if (previousColor == "green") {
		previousColor = "yellow";
	} else if (previousColor == "yellow") {
		previousColor = "red";
	}
	ReactDOM.render(
		<Trafficlight color={previousColor} />,
		document.querySelector("#app")
	);
}
setInterval(changeLight, 3000);
