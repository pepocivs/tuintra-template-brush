import React from 'react';
import { connect } from 'react-redux';

function NewsList({ news }) {
  if(!news.length) {
    return (
      <div>
        No News
      </div>
    )
  }
  return (
    <div>
      {news.map(article => {
        return (
          <div>
            <h2>{ article.title }</h2>
            <p>{ article._id }</p>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    news: state.news
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);