import React from "react";
import './Feed.css';
import { useAuth0 } from "@auth0/auth0-react";

const Feed = ({ entity, upVote, downVote }) => {
    const { isAuthenticated } = useAuth0();
    return (<>
        {
            isAuthenticated ? (
                <>
                    <div className="strip">
                        <div>
                            <button className="updownkey up" onClick={() => upVote(entity)}><i className="fas fa-caret-up"></i></button>
                            <div className="clickCount">{entity.upvote}</div>
                        </div>
                        <div>
                            <button className="updownkey down" onClick={() => downVote(entity)}><i className="fas fa-caret-down"></i></button>
                            <div className="clickCount">{entity.downvote}</div>
                        </div>
                        <div className="post-val">
                            {entity.value}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="strip">
                        <div>
                            <button className="updownkey up" onClick={() => alert("please Login . . . .")}><i className="fas fa-caret-up"></i></button>
                            <div className="clickCount">{entity.upvote}</div>
                        </div>
                        <div>
                            <button className="updownkey down" onClick={() => alert("please Login . . . .")}><i className="fas fa-caret-down"></i></button>
                            <div className="clickCount">{entity.downvote}</div>
                        </div>
                        <div className="post-val">
                            {entity.value}
                        </div>
                    </div>
                </>
            )
        }


    </>)
}
export default Feed;