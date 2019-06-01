import React from 'react';
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
		const footerSeparatorColor = {
			fill: this.clubInfo.options.secundary_color_web
		};
		return (
			<div>
				<img className="footer footer-separator" style={footerSeparatorColor} src="./assets/images/footer-separator.svg" alt="" />
				<div className="footer">
					<div style={footerColor} className="footer-content">
						Footer stuff
					</div>
				</div>
			</div>
		)
	}
}
