import React,{useState} from "react";
import './Post.css';

const Post = ({ updatePostList, onCancel }) => {
    const [postData, setPostData] = useState();


    return (<div className='addpost'>
        <div className='add-new-post'>Add New Post</div>
        <div className='post-title'>Post Title</div>
        <textarea name="post" rows="5" cols="40" value={postData} onChange={(e) => setPostData(e.target.value)} />
        {postData ?
            <div className='post_opt'>
                <button className="cancleBtn" onClick={onCancel}>Close</button>
                <button className="saveBtn" onClick={() => updatePostList(postData)}>Save</button>
            </div> :
            <div className='post_opt'>
                <button className="cancleBtn" onClick={onCancel}>Close</button>
                <button className="saveBtn" style={{ opacity: '0.2' }}>Save</button>
            </div>}

            
    </div>)
}
 export default Post;