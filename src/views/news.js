import React from 'react';

export default class News extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}
	
	render() {
		return (
			<div>
        <h2>Notícias</h2>
        <code>{JSON.stringify(this.props)}</code>
      </div>
		)
	}
}

