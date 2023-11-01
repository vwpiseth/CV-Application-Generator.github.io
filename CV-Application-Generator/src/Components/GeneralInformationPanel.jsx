import React, { useState } from 'react';
export default function GeneralInformationPanel({ title, firstName, lastName, email, phoneNum, handleFirstNameChange, handleLastNameChange, handleEmailChange, handlePhoneNumChange, handleReset}) {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <section className='general-info-section'>
        <h3>{title}</h3>
        {isActive ? (
          <form className="general-info-input-panel">
            <input
              placeholder="First name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <input
              placeholder="Last name"
              value={lastName}
              onChange={handleLastNameChange}
            />
            <input
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              placeholder="Phone number"
              value={phoneNum}
              onChange={handlePhoneNumChange}
            />
            <div className='section-opened-btn'>
              <button onClick={() => setIsActive(false)}>Unshow</button>
              <button onClick={handleReset}>Reset</button>
            </div>
            
          </form>
        ) : (
          <button onClick={() => setIsActive(true)} className='show-btn'>Show</button>
        )}
      </section>
    );
  }