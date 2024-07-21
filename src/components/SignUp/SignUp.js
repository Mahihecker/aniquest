import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
import "../../App.css";
import twitterIcon from "../../icons/twitter.svg";
import facebookIcon from "../../icons/facebook.svg";
import googleIcon from "../../icons/google.svg";
import instagramIcon from "../../icons/instagram.svg";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await axios.post("/api/v1/users/signup", {
        email,
        password,
        passwordConfirm: repeatPassword,
      });
      if (res.data.status === "success") {
        setLoading(false);
        setError("Account created successfully");
      }
    } catch (err) {
      setLoading(false);
      if (
        err.response &&
        err.response.data &&
        err.response.data.message.includes("E11000")
      ) {
        setError("Account already exists");
      } else {
        setError("An error occurred");
      }
    }
  };
  return (
    <div className="Container">
      <div className={styles.SignupBox}>
        <h1 className={styles.signUp}>Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              className={styles.inputField}
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className={styles.inputLabel} htmlFor="email">
              Email Address
            </label>
          </div>
          <div className={styles.formGroup}>
            <input
              className={styles.inputField}
              type="password"
              id="password"
              name="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className={styles.inputLabel} htmlFor="password">
              Password
            </label>
          </div>
          <div className={styles.formGroup}>
            <input
              className={styles.inputField}
              type="password"
              id="repeat-password"
              name="repeat-password"
              placeholder=" "
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
            <label className={styles.inputLabel} htmlFor="repeat-password">
              Repeat Password
            </label>
          </div>
          <button type="submit" className={styles.createAccountButton}>
            {loading ? "Creating Account..." : error ? error : "Create Account"}
          </button>
        </form>
        <div className={styles.loginPrompt}>
          Already have an account?{" "}
          <Link to="/LogIn" className={styles.loginLink}>
            Log in
          </Link>
        </div>
        <div class={styles.container2}>
          <div class={styles.solidLine}></div>
          <div class={styles.otherlinksprompt}>or Sign In with</div>
          <div class={styles.solidLine2}></div>
        </div>
        <div className={styles.socialSignUpContainer}>
          <div className={styles.socialSignUpBox}>
            <img
              src={twitterIcon}
              alt="Twitter Icon"
              className={styles.socialSignUpIcon}
            />
            <span className={styles.socialSignUpText}>
              Sign up with Twitter
            </span>
          </div>
          <div className={styles.socialSignUpBox}>
            <img
              src={instagramIcon}
              alt="Instagram Icon"
              className={styles.socialSignUpIcon}
            />
            <span className={styles.socialSignUpText}>
              Sign up with Instagram
            </span>
          </div>
          <div className={styles.socialSignUpBox}>
            <img
              src={googleIcon}
              alt="Google Icon"
              className={styles.socialSignUpIcon}
            />
            <span className={styles.socialSignUpText}>Sign up with Google</span>
          </div>
          <div className={styles.socialSignUpBox}>
            <img
              src={facebookIcon}
              alt="Facebook Icon"
              className={styles.socialSignUpIcon}
            />
            <span className={styles.socialSignUpText}>
              Sign up with Facebook
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
