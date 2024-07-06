import React, { useState } from 'react';
import styles from './ForgotPassword.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGetCode = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('/api/v1/users/forgotPassowrd', { email });
      if (res.data.status === 'success') {
        setLoading(false);
        navigate('/EnterCode'); // Navigate to EnterCode page upon success
      }
    } catch (err) {
      setLoading(false);
      setError('Email not found'); // Display error message if email is not found
    }
  };

  return (
    <div className="Container">
      <div className={styles.Box}>
        <h1 className={styles.Password}>Reset Your Password</h1>
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
        <button
          className={styles.createAccountButton}
          onClick={handleGetCode}
          disabled={loading} 
        >
          {loading ? 'Loading...' : 'Get Code'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
