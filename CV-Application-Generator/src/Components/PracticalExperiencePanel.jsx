import React, { useState } from 'react';
export default function PracticalExperiencePanel({ title, companyName, positionTitle, mainResponsibilities, dateFrom, dateTo, handleCompanyNameChange, handlePositionTitleChange, handleMainResponsibilitiesChange, handleDateFromChange, handleDateToChange, handleReset }) {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <section className="practical-experience-section">
        <h3>{title}</h3>
        {isActive ? (
          <form className='practical-experience-input-panel'>
            <input
              placeholder="Company Name"
              value={companyName}
              onChange={handleCompanyNameChange}
            />
            <input
              placeholder="Position Title"
              value={positionTitle}
              onChange={handlePositionTitleChange}
            />
            <input
              placeholder="Main Responsibilities"
              value={mainResponsibilities}
              onChange={handleMainResponsibilitiesChange}
            />
            <input
              placeholder="Date From"
              value={dateFrom}
              onChange={handleDateFromChange}
            />
            <input
              placeholder="Date To"
              value={dateTo}
              onChange={handleDateToChange}
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