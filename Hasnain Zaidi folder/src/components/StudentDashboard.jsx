import React, { useState } from 'react';
import './StudentDashboard.css';

const TITAN_LOGO = 'https://i.ibb.co/q3c3CkLS/titan-logo.jpg';
const SIR_YASIR_PHOTO = 'https://i.ibb.co/wF2jCyRH/WhatsApp-Image-2026-03-18-at-5-47-44-PM.jpg';

export default function StudentDashboard({ studentName = 'Hasnain', onLogout }) {
  const [studentView, setStudentView] = useState('home');
  const [studentActiveMenu, setStudentActiveMenu] = useState('dashboard');
  const [studentSidebarOpen, setStudentSidebarOpen] = useState(false);
  const [studentProfileMenuOpen, setStudentProfileMenuOpen] = useState(false);
  const [studentWidgetTab, setStudentWidgetTab] = useState('quizzes');

  const studentCourse = {
    title: "Modern Web Application Development",
    status: "ENROLLED",
    progress: 80,
    batch: 1,
    roll: "467643",
    campus: "Saylani TITAN Sukkur Campus",
    city: "Sukkur",
    schedule: ["Mon 02:00 PM - 04:00 PM", "Wed 02:00 PM - 04:00 PM", "Fri 02:00 PM - 04:00 PM"],
    attendance: "103/127",
    assignment: "13/16"
  };
  const studentFee = { month: "Jun 2026", amount: "Rs: 1000 /-", type: "Monthly", dueDate: "08-Jun-2026", voucherId: "202606467643", status: "PAID" };
  const studentWeekDays = [
    { d: "Sun", n: 21, active: false }, { d: "Mon", n: 22, active: true }, { d: "Tue", n: 23, active: false },
    { d: "Wed", n: 24, active: true }, { d: "Thu", n: 25, active: false }, { d: "Fri", n: 26, active: true }, { d: "Sat", n: 27, active: false }
  ];

  const handleLogoutClick = () => {
    setStudentView('home');
    setStudentActiveMenu('dashboard');
    setStudentProfileMenuOpen(false);
    if (onLogout) onLogout();
  };

  return (
    <div className="portal-container">
      <div className="mobile-header-notch-bar">
        <button className="mobile-hamburger-btn" onClick={() => setStudentSidebarOpen(!studentSidebarOpen)} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        <img src={TITAN_LOGO} alt="TITAN" className="mobile-brand-logo-img" />
      </div>

      {studentView === 'home' ? (
        <div className="student-simple-page">
          <div className="student-top-bar">
            <div className="student-top-logo-block">
              <img src={TITAN_LOGO} alt="TITAN" className="titan-logo-img" />
              <span className="titan-word-below">TITAN</span>
            </div>
            <div className="student-search-wrap">
              <input type="text" placeholder="Search Course" />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <div className="student-enrolled-dropdown">
              ENROLLED
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <button className="student-feedback-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              Feedback
            </button>
          </div>

          <div className="student-course-card">
            <div className="student-course-card-header">
              <h2>{studentCourse.title}</h2>
              <span className="enrolled-badge-pill">{studentCourse.status}</span>
            </div>
            <div className="student-progress-row">
              <span>Progress</span>
              <strong>{studentCourse.progress}% Completed</strong>
            </div>
            <div className="progress-bar-rail">
              <div className="progress-bar-fill-track" style={{ width: `${studentCourse.progress}%`, backgroundColor: '#10b981' }}></div>
            </div>
            <div className="student-info-grid-2col">
              <div><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg> Batch: <strong>{studentCourse.batch}</strong></div>
              <div><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/></svg> Roll: <strong>{studentCourse.roll}</strong></div>
              <div><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Campus: <strong>{studentCourse.campus}</strong></div>
              <div><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> City: <strong>{studentCourse.city}</strong></div>
            </div>
            <button className="student-view-details-btn" onClick={() => setStudentView('full')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              View Details
            </button>
          </div>
        </div>
      ) : (
        <>
          {studentSidebarOpen && <div className="sidebar-mobile-overlay-shade" onClick={() => setStudentSidebarOpen(false)}></div>}

          <aside className={`sidebar ${studentSidebarOpen ? 'expanded' : 'collapsed'}`}>
            <div className="toggle-trigger-action" onClick={() => setStudentSidebarOpen(!studentSidebarOpen)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2.5">
                {studentSidebarOpen ? <polyline points="15 18 9 12 15 6"/> : <polyline points="9 18 15 12 9 6"/>}
              </svg>
            </div>

            <div className="logo-container-vertical">
              <div className="titan-brand-wrapper">
                <img src={TITAN_LOGO} alt="TITAN" className="titan-logo-img" />
                {studentSidebarOpen && <h3 className="logo-text-bottom">TITAN</h3>}
              </div>
            </div>

            <nav className="nav-menu">
              {[
                { key: 'dashboard', label: 'Dashboard', icon: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></> },
                { key: 'progress', label: 'Progress', icon: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></> },
                { key: 'attendance', label: 'Attendance', icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></> },
                { key: 'payment', label: 'Payment', icon: <><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></> },
                { key: 'assignment', label: 'Assignment', icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></> },
                { key: 'quiz', label: 'Quiz', icon: <><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></> }
              ].map(item => (
                <div key={item.key} className={`nav-item ${studentActiveMenu === item.key ? 'active' : ''}`} onClick={() => { setStudentActiveMenu(item.key); setStudentSidebarOpen(false); }}>
                  <svg className="nav-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{item.icon}</svg>
                  {studentSidebarOpen && <span className="nav-text">{item.label}</span>}
                </div>
              ))}
            </nav>

            <div className="sidebar-footer">
              {studentProfileMenuOpen && (
                <div className="profile-popup-menu">
                  <div className="profile-popup-item logout-popup-item" onClick={handleLogoutClick}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    <span>Log out</span>
                  </div>
                </div>
              )}
              <div className="user-profile-wrapper" onClick={() => setStudentProfileMenuOpen(!studentProfileMenuOpen)}>
                <img src={SIR_YASIR_PHOTO} alt="Avatar" className="table-avatar-img" />
                {studentSidebarOpen && (
                  <div className="trainer-info">
                    <h4>{studentName}</h4>
                    <p>Student</p>
                  </div>
                )}
              </div>
            </div>
          </aside>

          <main className={`main-content ${studentSidebarOpen ? 'offset-expanded' : 'offset-collapsed'}`}>
            <div className="student-page-top-row">
              <div className="breadcrumbs">
                <span className="breadcrumb-nav-link" onClick={() => setStudentView('home')}>Home</span> &gt; <span className="current-crumb">{studentCourse.title}</span>
              </div>
              <button className="student-feedback-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                Feedback
              </button>
            </div>

            {studentActiveMenu === 'dashboard' ? (
              <>
                <section className="student-stats-top-row">
                  <div className="stat-card">
                    <div className="stat-content"><h3>{studentCourse.attendance}</h3><p>Attendance</p></div>
                    <div className="stat-badge-icon green-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-content"><h3>{studentCourse.assignment}</h3><p>Assignment</p></div>
                    <div className="stat-badge-icon purple-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div>
                  </div>
                  <div className="schedule-compact-widget">
                    <div className="schedule-title-row">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '6px'}}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      Class Schedule
                    </div>
                    <div className="schedule-days-flex">
                      {studentWeekDays.map(day => (
                        <div key={day.d} className={`day-pill ${day.active ? 'present' : ''}`}>{day.d} <span>{day.n}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <div className="student-widget-card">
                  <div className="student-widget-tabs">
                    <button className={studentWidgetTab === 'assignments' ? 'active-widget-tab' : ''} onClick={() => setStudentWidgetTab('assignments')}>Assignments</button>
                    <button className={studentWidgetTab === 'quizzes' ? 'active-widget-tab' : ''} onClick={() => setStudentWidgetTab('quizzes')}>Quizzes</button>
                    <button className={studentWidgetTab === 'events' ? 'active-widget-tab' : ''} onClick={() => setStudentWidgetTab('events')}>Events</button>
                  </div>
                  <p className="widget-empty-text">No upcoming {studentWidgetTab}.</p>
                </div>

                <div className="student-course-card" style={{ marginTop: '20px' }}>
                  <div className="student-course-card-header">
                    <h2>{studentCourse.title}</h2>
                    <span className="enrolled-badge-pill">{studentCourse.status}</span>
                  </div>
                  <div className="student-schedule-pills-row">
                    {studentCourse.schedule.map((s, i) => <span key={i} className="schedule-time-pill">{s}</span>)}
                  </div>
                  <div className="student-progress-row">
                    <span>Progress</span>
                    <strong>{studentCourse.progress}% Completed</strong>
                  </div>
                  <div className="progress-bar-rail">
                    <div className="progress-bar-fill-track" style={{ width: `${studentCourse.progress}%`, backgroundColor: '#10b981' }}></div>
                  </div>
                  <div className="student-info-grid-2col">
                    <div>Batch: <strong>{studentCourse.batch}</strong></div>
                    <div>Roll: <strong>{studentCourse.roll}</strong></div>
                    <div>Campus: <strong>{studentCourse.campus}</strong></div>
                    <div>City: <strong>{studentCourse.city}</strong></div>
                  </div>
                </div>

                <div className="workspace-card-view" style={{ marginTop: '20px' }}>
                  <h3 style={{marginTop: 0}}>Fee</h3>
                  <div className="table-responsive-wrapper">
                    <table className="client-data-table plain-table">
                      <thead><tr><th>Month</th><th>Amount</th><th>Type</th><th>Due date</th><th>Voucher ID</th><th>Status</th></tr></thead>
                      <tbody>
                        <tr>
                          <td>{studentFee.month}</td>
                          <td>{studentFee.amount}</td>
                          <td>{studentFee.type}</td>
                          <td>{studentFee.dueDate}</td>
                          <td>{studentFee.voucherId}</td>
                          <td><span className="badge-present-status">{studentFee.status}</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            ) : (
              <div className="workspace-card-view">
                <p style={{color: 'var(--text-muted)'}}>No {studentActiveMenu} data available yet.</p>
              </div>
            )}
          </main>
        </>
      )}
    </div>
  );
}