import React from 'react';
import './App.css';
import AddForm from './components/AddPostForm';
import PostWindow from './components/PostsWindow';

function App() {
  return (
    <div className="App">
      <AddForm />
      <PostWindow />
    </div>
  );
}

export default App;
