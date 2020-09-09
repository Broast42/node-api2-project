import React from 'react';
import axios from 'axios';



const AddPostForm = (props) => {

    const [postAdd, setPostAdd] = props.postSetter

    const handeler = (e) => {
        setPostAdd({
            ...postAdd,
                [e.target.name]: e.target.value
        })
    }

    const addPost = () => {
        axios
            .post(`http://localhost:8000/api/posts`, postAdd)
            .then(res =>{
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    //console.log(postAdd);
    return(
        <div className="add-post-form">
            <form onSubmit={addPost}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={(e) => handeler(e)}
                />
                <label htmlFor="contents">Content</label>
                <textarea
                    id="contents"
                    name="contents"
                    onChange={(e) => handeler(e)}
                />
                
                <button type="submit">Add Post</button>    
            </form>

        </div>
    );
};

export default AddPostForm;