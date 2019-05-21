import React from 'react';
import { Link } from "react-router-dom";
import '../styles/menu.css';


export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.links = props.links;
		this.color = props.color;
		this.shield = props.shield;
	}
	render() {
		const menuColor = { backgroundColor: this.color };
		return (
			<div id="menu-nav" style={menuColor}>
        <div className="row">
					<img id="logo" src={this.shield} alt=""/>
					<div id="nav-holder">
						<ul>
							{
								this.links.map(link => 
									<li key={link.path}>
										<Link to={link.path}>{link.name}</Link>
									</li>
								)
							}
						</ul>
					</div>
        </div>
      </div>
		)
	}
}

