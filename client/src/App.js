import React, { useState }  from 'react';
import './App.css';
import AddPostForm from './components/AddPostForm';
import PostWindow from './components/PostsWindow';

function App() {
  

  const [postAdd, setPostAdd] = useState({});

  return (
    <div className="App">
      <AddPostForm postSetter={[postAdd, setPostAdd]}/>
      <PostWindow newPostReset={postAdd}/>
    </div>
  );
}

export default App;
