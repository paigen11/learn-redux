import React from 'react';
import List from './List';
import Form from './Form';
import Message from './FoundBadWord';
import Post from './Posts';

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
      <Message />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>API Posts</h2>
      <Post />
    </div>
  </div>
);

export default App;
