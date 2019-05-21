import React from 'react';

export default class Teams extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}
	
	render() {
		return (
			<div>
        <h2>Equipos</h2>
        <code>{JSON.stringify(this.props)}</code>
      </div>
		)
	}
}

