import React from 'react';
import NewsList from '../components/newsList.js';

export default class News extends React.Component {
	constructor(props) {
		super(props);
		this.news = props.news;
	}
	
	render() {
		return (
			<div>
        <h2>Notícias</h2>
				<NewsList news={this.news} />
      </div>
		)
	}
}