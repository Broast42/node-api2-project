import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './Posts';

const PostWindow = () => {
    const [ allPosts, setAllPosts ] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/posts`)
            .then(res => {
                //console.log(res);
                setAllPosts(res.data);
            })
            .catch(err =>{
                console.log(err);
            })
    },[])

    console.log(allPosts);
    return(
        <div className="post-window">
            <div className="post-window-container">
                {allPosts === undefined ? "" :
                allPosts.map((x,i)=>(
                    <Posts key={i} data={x} />
                ))}
            </div>

        </div>
    );
};

export default PostWindow;