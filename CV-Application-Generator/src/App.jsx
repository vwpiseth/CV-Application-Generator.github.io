import React, { useState } from 'react';
import GeneralInformationPanel from './Components/GeneralInformationPanel'
import EducationExperiencePanel from './Components/EducationalExperiencePanel' 
import PracticalExperiencePanel from './Components/PracticalExperiencePanel'
import './style/App.css'
import './style/Display.css'

export default function App() {
  
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [titleOfStudy, setTitleOfStudy] = useState('');
    const [dateOfStudy, setDateOfStudy] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [mainResponsibilities, setMainResponsibilities] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
  
  
    function handleFirstNameChange(e) {
      setFirstName(e.target.value);
    }
  
    function handleLastNameChange(e) {
      setLastName(e.target.value);
    }
  
    function handleEmailChange(e) {
      setEmail(e.target.value);
    }
  
    function handlePhoneNumChange(e) {
      setPhoneNum(e.target.value);
    }
    function handleSchoolNameChange(e) {
      setSchoolName(e.target.value);
    }
  
    function handleTitleOfStudyChange(e) {
      setTitleOfStudy(e.target.value);
    }
  
    function handleDateOfStudyChange(e) {
      setDateOfStudy(e.target.value);
    }
    function handleCompanyNameChange(e) {
      setCompanyName(e.target.value);
    }
  
    function handlePositionTitleChange(e) {
      setPositionTitle(e.target.value);
    }
  
    function handleMainResponsibilitiesChange(e) {
      setMainResponsibilities(e.target.value);
    }
  
    function handleDateFromChange(e) {
      setDateFrom(e.target.value);
    }
  
    function handleDateToChange(e) {
      setDateTo(e.target.value);
    }
  
    function handleGeneralInfoReset() {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNum('');
    }
    function handleEducationExperienceReset() {
      setSchoolName('');
      setTitleOfStudy('');
      setDateOfStudy('');
    }
    function handlePracticalExperienceReset() {
      setCompanyName('');
      setPositionTitle('');
      setMainResponsibilities('');
      setDateFrom('');
      setDateTo('');
    }
  
    return ( 
      
      <div className='container'> 
        
          
        
        <div className='input-panel'>
          <GeneralInformationPanel
          title="General Information"
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNum={phoneNum}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          handleEmailChange={handleEmailChange}
          handlePhoneNumChange={handlePhoneNumChange}
          handleReset={handleGeneralInfoReset}
        />
        <EducationExperiencePanel
          title="Education Experience"
          schoolName={schoolName}
          titleOfStudy={titleOfStudy}
          dateOfStudy={dateOfStudy}
          handleSchoolNameChange={handleSchoolNameChange}
          handleTitleOfStudyChange={handleTitleOfStudyChange}
          handleDateOfStudyChange={handleDateOfStudyChange}
          handleReset={handleEducationExperienceReset}
          />
          <PracticalExperiencePanel 
          title="Practical Experience"
          companyName={companyName}
          positionTitle={positionTitle}
          mainResponsibilities={mainResponsibilities}
          dateFrom={dateFrom}
          dateTo={dateTo}
          handleCompanyNameChange={handleCompanyNameChange}
          handlePositionTitleChange={handlePositionTitleChange}
          handleMainResponsibilitiesChange={handleMainResponsibilitiesChange}
          handleDateFromChange={handleDateFromChange}
          handleDateToChange={handleDateToChange}
          />
        </div>
        <div className="display-panel">
          <div className='personal-info-display'>
            <p className='name'>Name : {firstName} {lastName}</p>
            <p className='email'>Email: {email}</p>
            <p className='phone-number'>Phone Number: {phoneNum}</p>
          </div>
          <div className="education-experience-display">
            <h1 className='education-experience-title'>Education Experience</h1>
            <p className='school'>School Name: {schoolName}</p>
            <p className='title-of-study'>Title of Study: {titleOfStudy}</p>
            <p className='date-of-study'>Date of Study: {dateOfStudy}</p>
          </div>
            <div className="practical-experience-display">
            <h1 className='practical-experience-title'>Practical Experience</h1>
            <p className='company'>Company Name: {companyName}</p>
            <p className='position'>Position Title: {positionTitle}</p>
            <p className='responsibilities'>Main Responsibilities: {mainResponsibilities}</p>
            <p className='date'>Date From: {dateFrom}</p>
            <p className='date'>Date To: {dateTo}</p>
          </div>
          <div className='footer'> </div>
        </div>
      </div>
    );
  }