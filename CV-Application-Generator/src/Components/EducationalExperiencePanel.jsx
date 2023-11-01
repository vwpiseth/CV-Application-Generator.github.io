import React, { useState } from 'react';

export default function EducationExperiencePanel({ title, schoolName, titleOfStudy, dateOfStudy, handleSchoolNameChange, handleTitleOfStudyChange, handleDateOfStudyChange, handleReset }) {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <section className="education-experience-section">
        <h3>{title}</h3>
        {isActive ? (
          <form className='education-experience-input-panel'>
            <input 
              placeholder="School Name"
              value={schoolName}
              onChange={handleSchoolNameChange}
            />
            <input
              placeholder="Title of Study"
              value={titleOfStudy}
              onChange={handleTitleOfStudyChange}
            />
            <input
              placeholder="Date of Study"
              value={dateOfStudy}
              onChange={handleDateOfStudyChange}
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