import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Comments = (props) => {
    const [comment, setComment]= useState([]);
    const [toggleComments, setToggleComments] = useState("none");

    
    const [commentAdd, setCommentAdd] = useState({});

    const toggleWindow = () => {
        if(toggleComments === "none"){
            setToggleComments("block");
        }else{
            setToggleComments("none");
        }
    }

    const handeler = (e) => {
        setCommentAdd({
            post_id: e.target.id,
            text: e.target.value
        })
    }

    const addComment = () => {
        axios
            .post(`http://localhost:8000/api/posts/${props.id}/comments`, commentAdd)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() =>{
        axios
            .get(`http://localhost:8000/api/posts/${props.id}/comments`)
            .then(res => {
                //console.log(res);
                setComment(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[props.id, commentAdd]);

    console.log(commentAdd);
    return(
        <div>
            <div className="comments-bar">
                <div className="comments-num" onClick={toggleWindow}>
                    
                    {comment.lenght === 0 ? <p>0</p> :
                    <p>{comment.length}</p>
                    }
                    
                    <p>Comments</p>
                </div>
            </div>
            <div className={`comments-items ${toggleComments}`}> 
                    {comment.length === 0 ? 
                    
                    <p>No Comments</p>
                    
                    :
                    comment.map((x,i)=>(
                        <div key={i} className="comment">
                            <p>{x.text}</p>
                            
                        </div>
                    ))
                    
                    }
                    <form onSubmit={() => addComment()}>
                        <textarea
                            id={props.id}
                            name="text"
                            placeholder="add a comment"
                            onChange={(e) => handeler(e)}
                        />
                        <button type="submit">submit</button>
                    </form>

            </div>
        </div>
    );
};

export default Comments;