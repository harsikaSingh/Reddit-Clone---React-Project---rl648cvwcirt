import React, { useState, useEffect } from "react";
import Post from "./Post";
import Feed from "./Feed";
import "./Post.css";
import Header from "./Header";
import Sidenav from "./Sidenav";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const [addNewPost, setAddNewPost] = useState(false);
  const { isAuthenticated } = useAuth0();
  const [postList, setPostList] = useState([
    {
      id: 0,
      value: "The Scramble to Save Twitter’s Research From Elon Musk",
      upvote: 30,
      downvote: 5,
    },
  ]);

  const updatePostList = (post) => {
    setPostList([
      ...postList,
      { id: postList.length, value: post, upvote: 0, downvote: 0 },
    ]);
    setAddNewPost(false);
  };
  const addPost = () => {
    setAddNewPost(true);
  };
  const upVote = (entity) => {
    const newPostList = postList;
    newPostList[entity.id] = { ...entity, upvote: entity.upvote + 1 };
    setPostList([...newPostList]);
  };
  const downVote = (entity) => {
    const newPostList = postList;
    newPostList[entity.id] = { ...entity, downvote: entity.downvote - 1 };
    setPostList([...newPostList]);
  };
  useEffect(() => console.log(postList, "postList"), [postList]);

  const onCancel = () => {
    setAddNewPost(false);
  };
  const ConatinerView = () => {
    return (
      <>
        <Header />
        <div className="partition">
          <div className="leftside">
            <Sidenav />
          </div>
          <div className="rightside">
            <div className="post_head">
            {
              isAuthenticated ? (
                 <>
                    <button className="primary_btn" onClick={addPost}>
                         Add New Post
                    </button>
                  </>
                     ) : (
                  <>
                      <button className="primary_btn" onClick={() => alert("please Login . . . .")}>
                          Add New Post                
                      </button>
                  </>
                  )
            }
              
            </div>
            <br />
            <div className="allpost">
              {postList.map((item, key) => (
                <>
                  <Feed
                    entity={item}
                    upVote={upVote}
                    downVote={downVote}
                    key={key}
                  />
                  <br />
                </>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {/* <Header />
          <Sidenav/> */}
      {addNewPost ? (
        <div className="container_home">
          <ConatinerView />
        </div>
      ) : (
        <div>
          <ConatinerView />
        </div>
      )}
      {
        addNewPost && (
        <div className="modal">
          <Post updatePostList={updatePostList} onCancel={onCancel} />
        </div>
       )
      }
    </>
  );
};
export default Home;