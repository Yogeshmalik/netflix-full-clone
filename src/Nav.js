import React, { useState, useEffect } from "react";
import "./Nav.css";
import {
  useHistory,
  useNavigate,
} from "react-router-dom/cjs/react-router-dom.min";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  // const history = useNavigate()

  useEffect(() => {
    /* it sets a piece of state */
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        /* when we scroll down 100 then call handleShow function and the black background will appear on the nav bar */
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      // window.removeEventListener("scroll"); {/* check this on the internet why this is giving white screen */}
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      {" "}
      {/* alway have the nav class but if show is true or
     if they scrolled past 100px and variable is set to true then we are appending the class 'nav_black' */}
      <img
        onClick={() => history.push("/")}
        className="nav_logo"
        //   src="https://upload.wikimedia.org/wikipedia/commons/0/0f"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />
      <img
        // onClick={() => history("/profile")} This is for latest router
        onClick={() => history.push("/profile")}
        className="nav_avatar"
        // src="https://pbs.twimg.com/profile_images/12401199904115"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix avatar"
      />
    </div>
  );
}

export default Nav;
