import React from "react";
import "./SigninScreen.css";

function SigninScreen() {
  const register = (e) => {
    e.preventDefault();
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
    // function blurEmail() {
    //   document.getElementById("email").style.borderBottom = "2px solid #e87c03";
    //   document.getElementById("errorMsgEmail").innerHTML =
    //     "Please enter a valid email address or phone number.";
    // }
    // function blurPass() {
    //   document.getElementById("pass").style.borderBottom = "2px solid #e87c03";
    //   document.getElementById("errorMsgPass").innerHTML =
    //     "Your password must contain between 4 and 60 characters.";
    // }

    // function focusEmail() {
    //   document.getElementById("email").style.borderBottom = "none";
    //   document.getElementById("errorMsgEmail").innerHTML = "";
    // }
    // function focusPass() {
    //   document.getElementById("pass").style.borderBottom = "none";
    //   document.getElementById("errorMsgPass").innerHTML = "";
    // }
    return (
      <div className="Form">
        <form>
          <h1 className="hero">Sign In</h1>
          <div className="inputBox error">
            <input
              type="text"
              id="email"
              class="inputText error"
              required
              //   onFocus={focusEmail}
              //   onBlur={blurEmail}
            />
            <span className="floating-label">Email or phone number</span>
            <span
              id="errorMsgEmail"
              //   onBlur={blurEmail}
              className="errorMsg"
            ></span>
          </div>
          <div className="inputBox error">
            <input
              id="pass"
              //   onFocus={focusPass}
              //   onBlur={blurPass}
              type="text"
              className="inputText error"
              required
            />
            <span className="floating-label">Password</span>
            <span
              id="errorMsgPass"
              //   onBlur={blurPass}
              className="errorMsg"
            ></span>
          </div>
          <button className="signin__button" type="submit">
            Sign In
          </button>
          <br />
          <div className="remem-help">
            <label className="remember">
              <input type="checkbox" />
              <span className="checkmark"></span>Remember me
            </label>
            <p>
              <a href="#">Need help?</a>
            </p>
          </div>
        </form>
        <div className="form-bottom">
          <div className="signupnow">
            <p>
              New to Netflix?<a href="#">Sign up now</a>
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
