import React, { useState } from 'react';
import styles from './LogIn.module.css';
import { Link } from 'react-router-dom';
import '../../App.css';
import twitterIcon from '../../icons/twitter.svg';
import facebookIcon from '../../icons/facebook.svg';
import googleIcon from '../../icons/google.svg';
import instagramIcon from '../../icons/instagram.svg';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:3000';

const LogIn = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('/api/v1/users/login', {
        email,
        password,
      });
      if (res.data.status === 'success') {
        setLoading(false);
        setError(''); // Clear any previous errors
        setSuccessMessage('Signing you in...');
        window.setTimeout(() => {
          window.location.reload(true); // Changed 'location' to 'window.location'
        }, 1500);
      }
    } catch (err) {
      setLoading(false);
      if (err.response && err.response.data.message === 'Account does not exist') {
        setError('Account does not exist');
      } else {
        setError('Invalid email or password');
      }
    }
  };
  return (
    <div className="Container">
      <div className={styles.SigninBox}>
        <h1 className={styles.signIn}>Sign In</h1>
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
          <label className={styles.inputLabel} htmlFor="email">Email Address</label>
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
          <label className={styles.inputLabel} htmlFor="password">Password</label>
        </div>
        <button type="submit" className={styles.createAccountButton}>{loading ? 'Signing In...' : error ? error : successMessage ? successMessage : 'Sign In'}
         </button>


          </form>
        <div className={styles.loginPrompt}>
          Don’t have an account? <Link to="/SignUp" className={styles.loginLink}>Sign Up</Link> or <Link to="/ForgotPassword" className={styles.loginLink}>Forget Password</Link>
        </div>
        <div className={styles.solidLine}></div>
        <div className={styles.otherlinksprompt}>or Sign In with</div>
        <div className={styles.solidLine2}></div>
        <div className={styles.socialSignUpContainer}>
          <div className={styles.socialSignUpBox}>
            <img src={twitterIcon} alt="Twitter Icon" className={styles.socialSignUpIcon} />
            <span className={styles.socialSignUpText}>Sign up with Twitter</span>
          </div>
          <div className={styles.socialSignUpBox}>
            <img src={instagramIcon} alt="Instagram Icon" className={styles.socialSignUpIcon} />
            <span className={styles.socialSignUpText}>Sign up with Instagram</span>
          </div>
          <div className={styles.socialSignUpBox}>
            <img src={googleIcon} alt="Google Icon" className={styles.socialSignUpIcon} />
            <span className={styles.socialSignUpText}>Sign up with Google</span>
          </div>
          <div className={styles.socialSignUpBox}>
            <img src={facebookIcon} alt="Facebook Icon" className={styles.socialSignUpIcon} />
            <span className={styles.socialSignUpText}>Sign up with Facebook</span>
          </div>
          
          
          </div>
      </div>
    </div>
  );
}

export default LogIn;
