import React from 'react';
import NewsList from '../components/newsList.js';
import NewsHead from '../components/newsHead.js';
import '../styles/news.css';


export default class News extends React.Component {
	constructor(props) {
		super(props);
		const highLightedNews = 3;
    this.news = props.news.slice(highLightedNews);
    this.highLightedNews = props.news.slice(0, highLightedNews);
	}
	
	render() {
		return (
			<div>
				<NewsHead news={this.highLightedNews} />
				<div className="regularNewsContainer">
					<NewsList news={this.news} />
				</div>
      </div>
		)
	}
}