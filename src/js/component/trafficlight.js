import React from "react";
import PropTypes from "prop-types";

export class Trafficlight extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// color: ""
		};
	}
	// setColor = colorName => {
	// 	this.setState({ color: colorName });
	// };
	render() {
		return (
			<div className="container">
				<div id="traffic-top" />
				<div id="container">
					<div
						className={
							this.props.color == "red"
								? "red active"
								: "red inactive"
						}
						// onClick={() => {
						// 	this.setColor("red");
						// }}
					/>
					<div
						className={
							this.props.color == "yellow"
								? "yellow active"
								: "yellow inactive"
						}
						// onClick={() => {
						// 	this.setColor("yellow");
						// }}
					/>
					<div
						className={
							this.props.color == "green"
								? "green active"
								: "green inactive"
						}
						// onClick={() => {
						// 	this.setColor("green");
						// }}
					/>
				</div>
			</div>
		);
	}
}

Trafficlight.propTypes = {
	color: PropTypes.string
};
