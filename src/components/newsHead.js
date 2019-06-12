import React from 'react';
import '../styles/newHead.css';


export default class NewsHead extends React.Component {
  constructor(props) {
    super(props);
    this.news = props.news;
	}
	render() {
    return (
      <div>
        {this.news.map(article => {
          return (
            <div className="newHeader">
              <img src={ article.image } alt={article.title} />
            </div>
          );
        })}
      </div>
    );
  }
}