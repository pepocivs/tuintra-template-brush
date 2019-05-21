import React  from 'react';

export default class Head extends React.Component {
	constructor(props) {
		super(props);
		this.title = props.title || 'Tuintra Template 1.0.0';
		document.head.querySelector('#favicon').href = props.favicon || '/logo.png';
		document.head.querySelector('#mainColor').content = props.mainColor || '#321252';
	}

	render() {
		return (
			this.title
		)
	}
}