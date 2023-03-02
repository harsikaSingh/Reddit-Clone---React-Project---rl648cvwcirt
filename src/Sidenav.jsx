import React from "react";
import './Sidenav.css';

const menus = [
    {to :'/r/home', text: "Home"},
    {to :'/r/popular', text: "Popular"}
]
const subreddits = [
    "Gaming",
    "Sports",
    "Bussiness",
    "Economics",
    "Crypto",
    "Science",
    "Soccer",
    "Television",
    "Celebrity",
    "Jokes",
    "Pics",
    "movies",
]

const Login =()=>{
    return(
        <>
           <div className="sidenav">
                <div className="sidenav_link">
                    <ul className="sidenav_menu">
                        {menus.map(menu =>(
                            <li><a href={menu.to}>{menu.text}</a></li>
                        ))}
                    </ul>
                    <hr />
                    <ul className="sidenav_subreddit">
                        {subreddits.map(subreddit => (
                            <li><a href={`/r/${subreddit}`} > {subreddit}</a></li>
                        ))}
                    </ul>
                </div>
           </div>
        </>
    );
}
 export default Login;