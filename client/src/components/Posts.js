import React from 'react';
import Comments from './Comments'

const Posts = (props) => {
    return(
        <div className="posts">
            <div><h3>{props.data.title}</h3></div>
            <div>
                <p>{props.data.contents}</p>
                <Comments id={props.data.id}/>
            </div>
        </div>
    );
};

export default Posts;