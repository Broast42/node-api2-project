import React from 'react';

const Posts = (props) => {
    return(
        <div className="posts">
            <div><h3>{props.data.title}</h3></div>
            <div>
                <p>{props.data.contents}</p>
            </div>
        </div>
    );
};

export default Posts;