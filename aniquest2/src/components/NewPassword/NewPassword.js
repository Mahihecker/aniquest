import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './NewPassword.module.css';
import '../../App.css';

const NewPassword = () => {
  const { token } = useParams(); 
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/users/resetPassword/${token}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password,
          confirmPassword
        })
      });

      const data = await response.json();
      if (data.status === 'success') {
        navigate('/login'); 
      } else {
        alert('Failed to reset password. Please try again.');
      }
    } catch (error) {
      console.error('Password reset error:', error);
      alert('Failed to reset password. Please try again.');
    }
  };

  return (
    <div className="Container">
      <div className={styles.Box}>
        <h1 className={styles.NewPassword}>Set a New Password</h1>
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
          <label className={styles.inputLabel} htmlFor="password">New Password</label>
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.inputField}
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder=" "
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <label className={styles.inputLabel} htmlFor="confirm-password">Confirm Password</label>
        </div>
        <button className={styles.Button} onClick={handleResetPassword}>Reset Password</button>
      </div>
    </div>
  );
};

export default NewPassword;
