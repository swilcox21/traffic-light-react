import React from "react";
import { Trafficlight } from "./trafficlight.js";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Trafficlight />
		</div>
	);
}
