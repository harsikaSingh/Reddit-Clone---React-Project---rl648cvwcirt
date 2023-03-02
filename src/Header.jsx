import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./Header.css";
import Tippy from "@tippyjs/react";

const Header = () => {
const {loginWithRedirect} = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
     <div className="header">
     <div className="sidenav_logo">
                     <img src="https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.jpg" alt="" srcset="" />
                </div>
        {/* <div className="header_left"> */}
            <div className="header_search">
                <input type="text" name="search" placeholder="searh reddit..." />
                <i className="fas fa-search" />
             </div>
        {/* </div> */}
        <div className="header_right">
            <i className="fas fa-bell"></i>
            <div className="header_user">
             {
                isAuthenticated ? (
                <>
                 <button
                  className="setOut"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
                <Tippy
                  content={
                    <div>
                      {user.name} <br />
                      {user.email}
                    </div>
                  }
                >
                  <div className="setuser">
                    {/* <i class="fa-solid fa-user"></i> */}
                    <img src={user.picture} width={50} height={50} alt="img" />
                  </div>
                </Tippy>
              </>
             ):(
              <>
                <button onClick = {()=>loginWithRedirect()} className="setIn">Log In </button>;
                   <i className="fas fa-caret-down"></i>
                </>
                )
             }
            </div>
        </div>
     </div>
    </>
  );
};


export default Header;