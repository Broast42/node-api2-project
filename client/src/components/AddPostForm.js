import React from 'react';
import axios from 'axios';

const AddPostForm = () => {
    return(
        <div className="add-post-form">
            <form>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                
                />
                <label htmlFor="contents">Content</label>
                <textarea
                    id="contents"
                    name="contents"
                
                />
                
                <button type="submit">Add Post</button>    
            </form>

        </div>
    );
};

export default AddPostForm;