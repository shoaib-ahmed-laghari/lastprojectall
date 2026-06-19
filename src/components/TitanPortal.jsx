import React, { useState } from 'react';
import './TitanPortal.css';

export default function TitanPortal() {
  // 'student-login', 'student-register', or 'teacher-login'
  const [view, setView] = useState('student-login');
  
  // Form States
  const [cnic, setCnic] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Jab view change ho toh form fields auto-clear ho jayein
  const handleViewChange = (newView) => {
    setView(newView);
    setCnic('');
    setEmail('');
    setDob('');
    setPassword('');
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting form for ${view}`, { cnic, email, dob, password });
    alert(`Form submitted for ${view}! Check console for details.`);
  };

  return (
    <div className="titan-container">
      {/* Branding Header */}
      <div className="titan-header">
        {/* Yahan aapka image logo add ho gaya hai */}
        <div className="titan-logo-container">
          <img 
            src="https://i.ibb.co/YFxWpq9f/titan-logo.jpg" 
            alt="TITAN Logo" 
            className="titan-logo-img" 
          />
        </div>
        <p className="titan-fullname">Taj Institute of Technology and Applied Networks</p>
        <h2 className="titan-portal-title">
          {view === 'teacher-login' ? 'Trainer Portal' : 'Student Portal'}
        </h2>
      </div>

      {/* Main Card */}
      <div className="titan-card">
        
        {/* Student Navigation Tabs (Only shows if not in Teacher view) */}
        {view !== 'teacher-login' && (
          <div className="titan-tabs">
            <button 
              className={`tab-btn ${view === 'student-login' ? 'active' : ''}`}
              onClick={() => handleViewChange('student-login')}
            >
              Login
            </button>
            <button 
              className={`tab-btn ${view === 'student-register' ? 'active' : ''}`}
              onClick={() => handleViewChange('student-register')}
            >
              Create Password
            </button>
          </div>
        )}

        {/* Dynamic Form Content */}
        <form onSubmit={handleSubmit} className="titan-form">
          
          {view === 'student-login' && (
            <>
              <h3>Login</h3>
              <p className="form-instruction">
                Kindly provide the CNIC number and password used during TITAN course registration.
              </p>
              
              <div className="input-group">
                <label>CNIC *</label>
                <input 
                  type="text" 
                  value={cnic} 
                  onChange={(e) => setCnic(e.target.value)} 
                  required 
                />
              </div>
            </>
          )}

          {view === 'student-register' && (
            <>
              <h3>Create a Password</h3>
              <p className="form-instruction">
                Kindly provide the CNIC number and DOB used during TITAN course registration.
              </p>
              
              <div className="input-group">
                <label>CNIC *</label>
                <input 
                  type="text" 
                  value={cnic} 
                  onChange={(e) => setCnic(e.target.value)} 
                  required 
                />
              </div>

              <div className="input-group">
                <label>DOB *</label>
                <input 
                  type="date" 
                  value={dob} 
                  onChange={(e) => setDob(e.target.value)} 
                  required 
                />
              </div>
            </>
          )}

          {view === 'teacher-login' && (
            <>
              <h3>Login</h3>
              <p className="form-instruction">
                Kindly provide your email and password to access the trainer portal.
              </p>
              
              <div className="input-group">
                <label>Email *</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
            </>
          )}

          {/* Password Input (Shared across all views) */}
          <div className="input-group password-group">
            <label>Password *</label>
            <div className="password-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <button 
                type="button" 
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <button type="submit" className="submit-btn">
            {view === 'student-register' ? 'SUBMIT' : 'LOGIN'}
          </button>

          {view === 'teacher-login' && (
            <span className="forgot-password-link">Forgot Password?</span>
          )}
        </form>
      </div>

      {/* Dynamic Portal Switcher Footer */}
      <div className="portal-switcher-box">
        {view === 'teacher-login' ? (
          <button 
            className="switch-portal-btn"
            onClick={() => handleViewChange('student-login')}
          >
            Login as student
          </button>
        ) : (
          <button 
            className="switch-portal-btn"
            onClick={() => handleViewChange('teacher-login')}
          >
            Login as teacher
          </button>
        )}
      </div>
    </div>
  );
}