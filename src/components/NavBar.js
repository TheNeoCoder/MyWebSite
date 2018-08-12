import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
	constructor() {
		super();
		this.state = { open: true };
	}

	openNav() {
		this.setState({ open: !this.state.open });
	}
	render() {
		/* Is there a better way to do this?!?! */

		let sideNavStyle = this.state.open ? "sideNavBar" : "sideNavBarOpen";
		let hamburgerButtonStyle = this.state.open
			? "hamburgerButton"
			: "hamburgerButtonFaded";
		let marginStyle = this.state.open ? "marginLeft" : "marginMoved";

		return (
			<div>
				<div className={sideNavStyle}>
					<a className="closeButton" onClick={this.openNav.bind(this)}>
						&times;
					</a>
					<Link className="sideNavLinks" to="/">
						Home
					</Link>
					<Link className="sideNavLinks" to="/about">
						About
					</Link>
					<Link className="sideNavLinks" to="/contact">
						Contact
					</Link>
				</div>

				<div>
					<span
						className={hamburgerButtonStyle}
						onClick={this.openNav.bind(this)}
					>
						&#9776;
					</span>
				</div>
			</div>
		);
	}
}

export default NavBar;