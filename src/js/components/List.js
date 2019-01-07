import React from 'react';
import { connect } from 'react-redux';

// the key for connecting a React component with Redux is connect.
// since we want a list of articles, it's a matter of
// connecting state.articles with the component. How? With mapStateToProps

// Always remember: the state in redux comes from reducers.

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
