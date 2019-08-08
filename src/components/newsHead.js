import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../styles/newHead.css';


export default class NewsHead extends React.Component {
  constructor(props) {
    super(props);
    this.news = props.news;
  }

	render() {
    return (
      <div>
        <AwesomeSlider className="newHeader">
          {this.news.map((article, key) => (
            <div data-src={article.image} key={key}>
              <p>{article.title}</p>
            </div>
          ))}
        </AwesomeSlider>
      </div>
    );
  }
}