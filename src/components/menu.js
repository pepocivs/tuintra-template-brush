import React from 'react';
import { Link } from "react-router-dom";
import '../styles/menu.css';


export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.clubInfo = props.clubInfo;
	}
	render() {
		const menuColor = { backgroundColor: this.clubInfo.options.principal_color_web };
		return (
			<div id="menu-nav" style={menuColor}>
				<div className="row">
					<img id="logo" src={this.clubInfo.options.clubs_logo} alt=""/>
					<div id="nav-holder">
						<ul>
							{
								this.clubInfo.menu.map(menuItem => {
									if(menuItem.visible && menuItem.father === "0")
										return <li key={menuItem._id}>
											<Link to={menuItem.file}>{menuItem.title}</Link>
										</li>
									return '';
								})
							}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

