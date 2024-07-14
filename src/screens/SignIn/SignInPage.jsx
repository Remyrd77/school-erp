import React, { useRef } from "react";
import "./SignInPage.css";
import { auth } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import TopnavFlex from "../../layout/topnav/TopnavFlex";
import FooterFlex from "../../layout/footer/FooterFlex";
import { useHistory } from "react-router-dom";

function SignInPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        localStorage.setItem("userToken", authUser.user.accessToken);
        history.push("/");
        window.location.reload();
      })
      .catch((e) => alert(e.message));
  };
  return (
    <>
      <TopnavFlex isLogin={true} />
      <div className="signin-page">
        <form>
          <h1 className="signin-heading">Student Login</h1>
          <input ref={emailRef} placeholder="Email" type="email" />
          <input ref={passwordRef} placeholder="Password" type="password" />
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
          <h4>
            <span className="signin-page-span-gray">New Student? </span>
            <span className="signin-page-span-link" onClick={register}>
              Sign Up now.
            </span>
          </h4>
        </form>
      </div>
      <FooterFlex />
    </>
  );
}

export default SignInPage;
