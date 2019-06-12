import React from 'react';
import FooterSeparator from '../assets/images/footer-separator.js';
import '../styles/footer.css';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.clubInfo = props.clubInfo;
	}
	render() {
		const footerColor = { 
			backgroundColor: this.clubInfo.options.secundary_color_web
		};
		return (
			<div>
				<FooterSeparator color={this.clubInfo.options.secundary_color_web} />
				<div style={footerColor} className="footer-content">
					Footer stuff
				</div>
			</div>
		)
	}
}
