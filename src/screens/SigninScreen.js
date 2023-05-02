import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SigninScreen.css";

function SigninScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  const Header = () => {
    return (
      <div className="Header" height="90px">
        <div className="image">
          <img
            height="45vh"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="netflix logo"
          />
        </div>
      </div>
    );
  };

  const Form = () => {
    return (
      <div className="Form">
        <form>
          <h1 className="hero">Sign In</h1>
          <div className="inputBox error">
            <input
              type="text"
              id="email"
              className="inputText error"
              required
              ref={emailRef}
            />
            <span className="floating-label">Email or phone number</span>
            <span id="errorMsgEmail" className="errorMsg"></span>
          </div>
          <div className="inputBox error">
            <input
              type="password"
              id="pass"
              className="inputText error"
              required
              ref={passwordRef}
            />
            <span className="floating-label">Password</span>
            <span id="errorMsgPass" className="errorMsg"></span>
          </div>
          <button className="signin__button" type="submit" onClick={signIn}>
            Sign In
          </button>
          <br />
          <div className="remem-help">
            <label className="remember">
              <input type="checkbox" />
              <span className="checkmark"></span>Remember me
            </label>
            <p>
              <a>Need help?</a>
            </p>
          </div>
        </form>
        <div className="form-bottom">
          <div className="signupnow">
            <p>
              New to Netflix?
              <a href="#" onClick={register}>
                Sign up now
              </a>
            </p>
          </div>
          <div className="recaptcha">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="#">Learn more.</a>
            </p>
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => {
    return (
      <footer className="Footer">
        <div className="divider"></div>
        <div className="wrapper">
          <div className="call">
            <p>
              Questions? Call<a href="">000-800-040-1843</a>
            </p>
          </div>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Help Centre</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
          </ul>
          <div className="lang-cont">
            <label id="lang" name="lang">
              <img
                className="globe"
                htmlFor="lang"
                height="45px"
                src="https://img.icons8.com/ios-filled/344/geography.png"
              />
              <select htmlFor="lang" className="lang">
                Select Language
                <option>English</option>
                <option>हिन्दी</option>
              </select>
            </label>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <div className="signinScreen">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default SigninScreen;
