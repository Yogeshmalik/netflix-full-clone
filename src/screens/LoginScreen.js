import React, { useState } from "react";
import "./LoginScreen.css";
import SigninScreen from "./SigninScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <>
      {signIn ? (
        <SigninScreen className="App" />
      ) : (
        <div className="loginScreen">
          <div className="loginScreen__background">
            <img
              className="loginScreen__logo"
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt="Netflix Logo"
            />
            <button
              onClick={() => setSignIn(true)}
              className="loginScreen__button"
            >
              Sign In
            </button>
          </div>
          <div className="loginScreen__body">
            <div className="loginScreen__hero">
              <h1>Unlimited movies, TV shows and more</h1>
              <h2>Watch anywhere. Cancle anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen__getStarted"
                  >
                    Get Started &gt;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginScreen;
