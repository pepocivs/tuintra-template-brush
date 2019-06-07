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
				<div className="footer footer-separator">
					<FooterSeparator color={this.clubInfo.options.secundary_color_web} />
				</div>
				<div className="footer">
					<div style={footerColor} className="footer-content">
						Footer stuff
					</div>
				</div>
			</div>
		)
	}
}
