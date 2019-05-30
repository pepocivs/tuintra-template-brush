import React from 'react';
import '../styles/newList.css';


export default class NewsList extends React.Component {
  constructor(props) {
		super(props);
		this.news = props.news;
	}
	render() {
    return (
      <div>
        {this.news.map(article => {
          return (
            <div key={article._id}>
              <h2>{ article.title }</h2>
              <p>{article.subtitle}</p>
            </div>
          );
        })}
      </div>
    );
  }
}