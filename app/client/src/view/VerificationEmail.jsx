// This page show us the verifivation by email,
// Emailed the code to user and th user submit the code

import React, { useState } from 'react';

// Components
import { Button } from '../components/button/Button';
import { Input } from '../components/input/Input';
import { createBrowserHistory } from 'history';

// Routs in json
import Applicant from '../Applicant.json';

// Error handler
import { Error } from './ErrorHandling';

// Style
import '../styles.css';

export default function VerificationEmail() {
  // This hook, use for input class name when the client input the wrong data
  const [className, setClassName] = useState('input');
  
  // This hook use for save input data
  const [code, setCode] = useState({});

  // This hook use for check errors of input
  const [formErr, setFormErr] = useState({
    code_valid_Massage: '',
  });

  // This arrow function use for put data in our save data hook
  const handleInput = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setCode({
      ...code,
      [name]: value,
    });
  };

  // This arrow function use for check errors in input
  const handleSubmit = async event => {
    event.preventDefault();
    const code_valid = await Error.VerificationCodeHandler(code['Code']);

    setFormErr({
      ...formErr,
      code_valid_Massage: code_valid.massage,
    });
    if (code_valid.massage != '') {
      setClassName('wrong-input');
    } else {
      setClassName('input');
    }
  };

  return (
    <div className="verification-page">
      <div className="vrfyPge-screen-form">
        <span className="verificition-header">Verification email </span>
        <span className="verificition-note">Please enter the code sent to</span>
        <span className="verificition-note">Ali.Tavasolian@gmail.com</span>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="verificition-input">
            <Input
              name="Code"
              placeholder="Example: 1234"
              type="text"
              handleChange={handleInput}
              className={className}
              error={formErr['code_valid_Massage']}
            />
          </div>
          <p className="resend-code"> Resend code</p>
          <div className="verificition-button">
            <Button className="green-btn" name="Verify" />
          </div>
        </form>
      </div>
    </div>
  );
}
