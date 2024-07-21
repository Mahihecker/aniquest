import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EnterCode.module.css';
import '../../App.css';

const EnterCode = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState('');

  const handleVerify = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/users/resetPassword/${verificationCode}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      const data = await response.json();
      if (data.status === 'success') {
        navigate('/NewPassword');
      } else {
        alert('Invalid verification code. Please try again.');
      }
    } catch (error) {
      console.error('Verification error:', error);
      alert('Failed to verify code. Please try again.');
    }
  };

  return (
    <div className="Container">
      <div className={styles.Box}>
        <h1 className={styles.Code}>Enter The Code</h1>
        <div className={styles.formGroup}>
          <input
            className={styles.inputField}
            type="text"
            placeholder="Enter verification code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
          <label className={styles.inputLabel} htmlFor="code"></label>
        </div>
        <button className={styles.Button} onClick={handleVerify}>Verify</button>
      </div>
    </div>
  );
};

export default EnterCode;
