import React, { useState } from 'react';
import './Dashboard.css';
import TitanPortal from './TitanPortal';

const TITAN_LOGO = 'https://i.ibb.co/q3c3CkLS/titan-logo.jpg';
const TITAN_LOGO_BG = 'https://i.ibb.co/Zz3Hk1Q5/titan-logo-bg.jpg';
const SIR_YASIR_PHOTO = 'https://i.ibb.co/wF2jCyRH/WhatsApp-Image-2026-03-18-at-5-47-44-PM.jpg';

const Dashboard = () => {
  // Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Sidebar / navigation
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeCourseTab, setActiveCourseTab] = useState('students');
  const [searchQuery, setSearchQuery] = useState('');
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentTab, setStudentTab] = useState('attendance');
  const [studentsPage, setStudentsPage] = useState(1);

  // Calendar state
  const [calMonth, setCalMonth] = useState(5); // June = index 5
  const [calYear, setCalYear] = useState(2026);

  // Attendance page state
  const [attendanceCourseFilter, setAttendanceCourseFilter] = useState(0);
  const [attendanceView, setAttendanceView] = useState('overall');
  const [attCourseDropdownOpen, setAttCourseDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const goTo = (menu) => {
    setCurrentMenu(menu);
    setSelectedCourse(null);
    setSelectedStudent(null);
    setIsSidebarOpen(false);
    setProfileMenuOpen(false);
  };

  const handleLogoutAction = () => {
    setIsLoggedIn(false);
    setIsSidebarOpen(false);
    setSelectedCourse(null);
    setCurrentMenu('dashboard');
    setProfileMenuOpen(false);
  };

  const courses = [
    { id: "CRS-001", title: "Little Geniuses: Coding, Design & AI Fun Lab", type: "LAB | Male", campus: "TITAN Ghotki Campus (Ghotki)", batch: "Batch 1", progress: 0, enrolled: 4, schedule: "Sat 04:00 PM - 06:00 PM | Sun 04:00 PM - 06:00 PM", startedOn: "1 Jun 2026", bgHeader: "#e6fdf4", accentColor: "#10b981" },
    { id: "CRS-002", title: "Little Geniuses: Coding, Design & AI Fun Lab", type: "LAB | Female", campus: "TITAN Ghotki Campus (Ghotki)", batch: "Batch 1", progress: 0, enrolled: 8, schedule: "Sat 12:00 PM - 02:00 PM | Sun 12:00 PM - 02:00 PM", startedOn: "1 Jun 2026", bgHeader: "#eff2fe", accentColor: "#4f46e5" },
    { id: "CRS-003", title: "Little Geniuses: Coding, Design & AI Fun Lab", type: "LAB | Female", campus: "TITAN Ghotki Campus (Ghotki)", batch: "Batch 1", progress: 0, enrolled: 0, schedule: "Sat 10:00 AM - 12:00 PM | Sun 10:00 AM - 12:00 PM", startedOn: "1 Jun 2026", bgHeader: "#f8fafc", accentColor: "#64748b" },
    { id: "CRS-004", title: "Modern Web Application Development", type: "LAB | Female", campus: "TITAN Ghotki Campus (Ghotki)", batch: "Batch 3", progress: 25, enrolled: 30, schedule: "Sat 08:00 AM - 10:00 AM | Sun 08:00 AM - 10:00 AM", startedOn: "1 Jan 2026", bgHeader: "#ffebe9", accentColor: "#ef4444" },
    { id: "CRS-005", title: "Modern Web Application Development", type: "LAB | Male", campus: "TITAN Ghotki Campus (Ghotki)", batch: "Batch 3", progress: 30, enrolled: 28, schedule: "Sat 08:00 AM - 10:00 AM | Sun 08:00 AM - 10:00 AM", startedOn: "1 Jan 2026", bgHeader: "#e3f2fd", accentColor: "#2563eb" },
    { id: "CRS-006", title: "Modern Web Application Development", type: "LAB | Male", campus: "Saylani TITAN Sukkur Campus (Sukkur)", batch: "Batch 1", progress: 40, enrolled: 32, schedule: "Mon 06:00 PM - 08:00 PM | Wed 06:00 PM - 08:00 PM | Fri 06:00 PM - 08:00 PM", startedOn: "1 Jan 2026", bgHeader: "#ede9fe", accentColor: "#7c3aed" }
  ];

  const studentNames = [
    ["Abdul Jabbar", "477526", "abjabbargopang@gmail.com"],
    ["Abdul rafay", "469955", "rafaygameti0345@gmail.com"],
    ["Abdul salam shaikh", "475436", "abdulsalam06699@gmail.com"],
    ["Abdullah Khan", "470278", "ak1636802@gmail.com"],
    ["Abdullah indhar", "467789", "indharabdullah30@gmail.com"],
    ["Ajmal", "472623", "dharejoajmal7@gmail.com"],
    ["Alyan Mehmood Shah Syed", "468526", "alyaly3036@gmail.com"],
    ["Ashraf Ali", "472345", "hamad@1947gmail.com"],
    ["Ayan Arain", "525033", "msayanarain846@gmai.com"],
    ["Faizan khan", "468384", "faizanlala712@gmail.com"]
  ];

  const studentsData = studentNames.map(([name, code, email]) => ({
    name, code, email, status: "ENROLLED",
    img: "https://img.jsdesign.hk/assets/img/6620ca9b6bda6fa0060cf476.jpg"
  }));

  const TOTAL_STUDENT_RECORDS = 106;
  const PAGE_SIZE = 10;
  const totalPages = Math.ceil(TOTAL_STUDENT_RECORDS / PAGE_SIZE);

  const studentAttendanceLog = [
    ["Mon, Jun 1, 2026", "Present"], ["Wed, Jun 3, 2026", "Present"], ["Fri, Jun 5, 2026", "Absent"],
    ["Mon, Jun 8, 2026", "Present"], ["Wed, Jun 10, 2026", "Present"], ["Fri, Jun 12, 2026", "Present"],
    ["Mon, Jun 15, 2026", "Present"], ["Wed, Jun 17, 2026", "Present"]
  ];

  const filteredStudents = studentsData.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) || student.code.includes(searchQuery)
  );

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const buildCalendarGrid = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    return cells;
  };

  const getDayEvents = (day) => {
    if (!day) return [];
    const weekday = new Date(calYear, calMonth, day).getDay();
    const events = [];
    if (weekday === 1 || weekday === 3 || weekday === 5) events.push({ label: "MODERN WEB APPLICATION DEVELO...", color: "#dcfce7" });
    if (weekday === 0 || weekday === 6) {
      events.push({ label: "LITTLE GENIUSES: CODING, DESIGN...", color: "#dcfce7" });
      events.push({ label: "LITTLE GENIUSES: CODING, DESIGN...", color: "#dcfce7" });
    }
    return events;
  };

  const changeMonth = (dir) => {
    let m = calMonth + dir;
    let y = calYear;
    if (m < 0) { m = 11; y -= 1; }
    if (m > 11) { m = 0; y += 1; }
    setCalMonth(m); setCalYear(y);
  };

  const todayMarker = 17;

  // ============ LOGGED OUT -> SHOW ACTUAL TITAN PORTAL ============
  if (!isLoggedIn) {
    return (
      <TitanPortal
        onLoginSuccess={(role, userData) => {
          setIsLoggedIn(true);
          setCurrentMenu('dashboard');
          setSelectedCourse(null);
        }}
      />
    );
  }

  return (
    <div className="portal-container">
      <div className="mobile-header-notch-bar">
        <button className="mobile-hamburger-btn" onClick={toggleSidebar} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        <img src={TITAN_LOGO} alt="TITAN" className="mobile-brand-logo-img" />
      </div>

      {isSidebarOpen && <div className="sidebar-mobile-overlay-shade" onClick={() => setIsSidebarOpen(false)}></div>}

      {/* ================= SIDEBAR ================= */}
      <aside className={`sidebar ${isSidebarOpen ? 'expanded' : 'collapsed'}`}>
        <div className="toggle-trigger-action" onClick={toggleSidebar}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2.5">
            {isSidebarOpen ? <polyline points="15 18 9 12 15 6"/> : <polyline points="9 18 15 12 9 6"/>}
          </svg>
        </div>

        <div className="logo-container-vertical">
          <div className="titan-brand-wrapper">
            <img src={TITAN_LOGO} alt="TITAN" className="titan-logo-img" />
            {isSidebarOpen && <h3 className="logo-text-bottom">TITAN</h3>}
          </div>
        </div>

        <nav className="nav-menu">
          <div className={`nav-item ${currentMenu === 'dashboard' ? 'active' : ''}`} onClick={() => goTo('dashboard')}>
            <svg className="nav-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
            {isSidebarOpen && <span className="nav-text">Dashboard</span>}
          </div>

          <div className={`nav-item ${currentMenu === 'calendar' ? 'active' : ''}`} onClick={() => goTo('calendar')}>
            <svg className="nav-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            {isSidebarOpen && <span className="nav-text">Calendar</span>}
          </div>

          <div className={`nav-item ${currentMenu === 'attendance' ? 'active' : ''}`} onClick={() => goTo('attendance')}>
            <svg className="nav-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            {isSidebarOpen && <span className="nav-text">Attendance</span>}
          </div>
        </nav>

        <div className="sidebar-footer">
          {profileMenuOpen && (
            <div className="profile-popup-menu">
              <div className="profile-popup-item" onClick={() => goTo('profile')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span>Profile</span>
              </div>
              <div className="profile-popup-item logout-popup-item" onClick={handleLogoutAction}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                <span>Log out</span>
              </div>
            </div>
          )}
          <div className="user-profile-wrapper" onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
            <img src={SIR_YASIR_PHOTO} alt="Avatar" className="table-avatar-img" />
            {isSidebarOpen && (
              <div className="trainer-info">
                <h4>Sir Yasir Ali (SUK)</h4>
                <p>Trainer</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className={`main-content ${isSidebarOpen ? 'offset-expanded' : 'offset-collapsed'}`}>

        {currentMenu === 'profile' && (
          <div className="profile-page-wrapper animated-fade">
            <div className="profile-cover-banner" style={{ backgroundImage: `url(${TITAN_LOGO_BG})` }}>
              <img src={SIR_YASIR_PHOTO} alt="Avatar" className="profile-cover-avatar" />
            </div>
            <div className="profile-identity-row">
              <div>
                <h1>Sir Yasir Ali (SUK)</h1>
                <span className="role-pill-tag">Trainer</span>
              </div>
              <div className="profile-action-buttons">
                <button className="btn-outline-action">Edit Profile</button>
                <button className="btn-dark-action">Download Card</button>
              </div>
            </div>

            <div className="profile-grid-layout">
              <div className="profile-info-card">
                <h3>Personal Information</h3>
                <div className="info-row-item"><span className="info-label">Email</span><span className="info-value">yasirlashari131@gmail.com</span></div>
                <div className="info-row-item"><span className="info-label">Employee ID</span><span className="info-value">15353</span></div>
                <div className="info-row-item"><span className="info-label">Hourly Rate</span><span className="info-value">2500/hr</span></div>
                <div className="info-row-item"><span className="info-label">Phone</span><span className="info-value">03033742231</span></div>
              </div>
              <div className="profile-info-card">
                <h3>Bio</h3>
                <p className="muted-italic-text">No bio added yet.</p>
              </div>
              <div className="profile-info-card">
                <h3>Social Links</h3>
                <p className="muted-italic-text">No social links added yet.</p>
              </div>
              <div className="profile-info-card">
                <h3>Security</h3>
                <button className="btn-outline-action">Update Password</button>
              </div>
            </div>
          </div>
        )}

        {currentMenu === 'calendar' && (
          <div className="calendar-page-wrapper animated-fade">
            <h1>Calendar</h1>
            <div className="calendar-card-frame">
              <div className="calendar-month-nav-row">
                <button className="cal-nav-btn" onClick={() => changeMonth(-1)} aria-label="Previous month">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <h3>{monthNames[calMonth]} {calYear}</h3>
                <button className="cal-nav-btn" onClick={() => changeMonth(1)} aria-label="Next month">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
              <div className="calendar-weekday-header-row">
                {weekDays.map(d => <div key={d} className="cal-weekday-cell">{d}</div>)}
              </div>
              <div className="calendar-grid-body">
                {buildCalendarGrid(calMonth, calYear).map((day, idx) => (
                  <div key={idx} className={`cal-day-cell ${day === todayMarker && calMonth === 5 ? 'cal-today' : ''} ${!day ? 'cal-empty' : ''}`}>
                    {day && (
                      <>
                        <div className="cal-day-number-row">
                          <span>{day}</span>
                          {getDayEvents(day).length > 0 && <span className="cal-day-dot"></span>}
                        </div>
                        <div className="cal-events-stack">
                          {getDayEvents(day).slice(0, 2).map((ev, i) => (
                            <div key={i} className="cal-event-pill" style={{ background: ev.color }}>{ev.label}</div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentMenu === 'attendance' && (
          <div className="attendance-page-wrapper animated-fade">
            <div className="attendance-top-header-row">
              <h1>Attendance</h1>
              <div className="course-selector-dropdown-wrap">
                <div className="course-selector-trigger" onClick={() => setAttCourseDropdownOpen(!attCourseDropdownOpen)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <div>
                    <strong>{courses[attendanceCourseFilter].title}</strong>
                    <p>{courses[attendanceCourseFilter].schedule}</p>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                {attCourseDropdownOpen && (
                  <div className="course-selector-options-list">
                    {courses.map((c, idx) => (
                      <div key={c.id} className="course-selector-option-item" onClick={() => { setAttendanceCourseFilter(idx); setAttCourseDropdownOpen(false); }}>
                        {c.title} — {c.type}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="attendance-stats-header-row">
              <div>
                <h3>Overall Stats</h3>
                <p className="muted-small-text">20 May 2026 — 20 Jun 2026</p>
              </div>
              <div className="overall-slot-toggle-group">
                <button className={`toggle-pill-btn ${attendanceView === 'overall' ? 'toggle-active' : ''}`} onClick={() => setAttendanceView('overall')}>Overall</button>
                <button className={`toggle-pill-btn ${attendanceView === 'slot' ? 'toggle-active' : ''}`} onClick={() => setAttendanceView('slot')}>This Slot</button>
              </div>
            </div>

            <section className="attendance-stat-cards-row">
              <div className="attendance-stat-card">
                <div><h3>0</h3><p>Total Classes</p></div>
                <div className="stat-badge-icon blue-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg></div>
              </div>
              <div className="attendance-stat-card">
                <div><h3>0m</h3><p>Total Time Served</p></div>
                <div className="stat-badge-icon green-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              </div>
              <div className="attendance-stat-card">
                <div><h3>0m</h3><p>Total Late Time</p></div>
                <div className="stat-badge-icon red-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              </div>
            </section>

            <div className="attendance-records-card-frame">
              <div className="attendance-records-header-row">
                <div>
                  <h3>Attendance Records</h3>
                  <p className="muted-small-text">Course: {courses[attendanceCourseFilter].title} - {courses[attendanceCourseFilter].schedule}</p>
                </div>
                <div className="date-range-inputs-row">
                  <div className="date-input-block">
                    <label>START DATE</label>
                    <input type="text" defaultValue="May 20" readOnly />
                  </div>
                  <span className="date-range-arrow">→</span>
                  <div className="date-input-block">
                    <label>END DATE</label>
                    <input type="text" defaultValue="Jun 20" readOnly />
                  </div>
                </div>
              </div>
              <div className="no-records-found-state">No attendance records found.</div>
              <div className="table-pagination-footer-row">
                <span className="muted-small-text">Showing 1-0 of 0 records</span>
                <div className="pagination-buttons-group">
                  <button className="pagination-nav-btn" disabled>Previous</button>
                  <button className="pagination-page-num active-page">1</button>
                  <button className="pagination-nav-btn" disabled>Next</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentMenu === 'dashboard' && (
          <>
            {!selectedCourse ? (
              <>
                <div className="dashboard-title-row"><h1>Dashboard</h1></div>

                <section className="stats-grid-row">
                  <div className="stat-card">
                    <div className="stat-content"><h3>6</h3><p>Active Courses</p></div>
                    <div className="stat-badge-icon green-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-content"><h3>102</h3><p>Enrolled Students</p></div>
                    <div className="stat-badge-icon blue-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-content"><h3>0</h3><p>Total Assignments</p></div>
                    <div className="stat-badge-icon purple-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg></div>
                  </div>

                  <div className="schedule-compact-widget">
                    <div className="schedule-title-row">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '6px'}}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      Teaching Schedule
                    </div>
                    <div className="schedule-days-flex">
                      <div className="day-pill present">Sun <span>14</span></div>
                      <div className="day-pill present">Mon <span>15</span></div>
                      <div className="day-pill">Tue <span>16</span></div>
                      <div className="day-pill current">Wed <span>17</span></div>
                      <div className="day-pill">Thu <span>18</span></div>
                      <div className="day-pill present">Fri <span>19</span></div>
                      <div className="day-pill present">Sat <span>20</span></div>
                    </div>
                  </div>
                </section>

                <div className="section-title-bar"><h3>Active Courses</h3></div>

                <section className="courses-responsive-grid">
                  {courses.map((course) => (
                    <div key={course.id} className="course-clean-card" onClick={() => { setSelectedCourse(course); setActiveCourseTab('students'); setStudentsPage(1); }}>
                      <div className="card-top-accent" style={{ backgroundColor: course.bgHeader }}>
                        <div>
                          <h4>{course.title}</h4>
                          <span className="subtitle-tag">{course.type}</span>
                        </div>
                        <span className="batch-outline-pill">{course.batch}</span>
                      </div>
                      <div className="card-body-content">
                        <p className="location-text">{course.campus}</p>
                        <div className="progress-container-box">
                          <div className="flex-space-between text-small">
                            <span>Progress</span>
                            <span>{course.progress}% Completed</span>
                          </div>
                          <div className="progress-bar-rail">
                            <div className="progress-bar-fill-track" style={{ width: `${course.progress}%`, backgroundColor: course.accentColor }}></div>
                          </div>
                        </div>
                        <div className="meta-footer-info">
                          <div>Enrolled: {course.enrolled} students</div>
                          <div>Schedule: {course.schedule}</div>
                          <div>Started On: {course.startedOn}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              </>
            ) : selectedStudent ? (
              <div className="expanded-course-workspace-card animated-fade">
                <div className="breadcrumbs">
                  <span className="breadcrumb-nav-link" onClick={() => { setSelectedCourse(null); setSelectedStudent(null); }}>Dashboard</span> &gt; <span className="breadcrumb-nav-link" onClick={() => setSelectedStudent(null)}>{selectedCourse.title}</span> &gt; <span className="current-crumb">{selectedStudent.name}</span>
                </div>

                <div className="tabs-header-navigation-bar">
                  <button className={`nav-tab-item-btn ${studentTab === 'attendance' ? 'tab-active' : ''}`} onClick={() => setStudentTab('attendance')}>Attendance</button>
                  <button className={`nav-tab-item-btn ${studentTab === 'assignments' ? 'tab-active' : ''}`} onClick={() => setStudentTab('assignments')}>Assignments</button>
                  <button className={`nav-tab-item-btn ${studentTab === 'quizzes' ? 'tab-active' : ''}`} onClick={() => setStudentTab('quizzes')}>Quizzes</button>
                </div>

                {studentTab === 'attendance' && (
                  <div className="tab-render-container">
                    <section className="attendance-stat-cards-row student-stats-row">
                      <div className="attendance-stat-card"><div><h3>90</h3><p>Total Classes</p></div><div className="stat-badge-icon blue-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/></svg></div></div>
                      <div className="attendance-stat-card"><div><h3>59</h3><p>Present</p></div><div className="stat-badge-icon green-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg></div></div>
                      <div className="attendance-stat-card"><div><h3>5</h3><p>Leave</p></div><div className="stat-badge-icon amber-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/></svg></div></div>
                      <div className="attendance-stat-card"><div><h3>26</h3><p>Absent</p></div><div className="stat-badge-icon red-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/></svg></div></div>
                    </section>

                    <div className="attendance-overview-card">
                      <h3>Attendance Overview</h3>
                      <div className="overview-progress-rail"><div className="overview-progress-fill" style={{ width: '65%' }}></div></div>
                      <p className="attendance-warning-text">Your attendance is below 75%. Please improve your attendance.</p>
                    </div>

                    <div className="attendance-month-table-card">
                      <div className="attendance-month-header-row">
                        <h3>Attendance: Jun 2026</h3>
                        <select className="month-select-dropdown" defaultValue="Jun 2026"><option>Jun 2026</option></select>
                      </div>
                      <div className="table-responsive-wrapper">
                        <table className="client-data-table plain-table">
                          <thead><tr><th>Date</th><th>Status</th></tr></thead>
                          <tbody>
                            {studentAttendanceLog.map((row, idx) => (
                              <tr key={idx}>
                                <td>{row[0]}</td>
                                <td><span className={row[1] === 'Present' ? 'badge-present-status' : 'badge-notmarked-status'}>{row[1]}</span></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
                {studentTab === 'assignments' && <div className="workspace-card-view"><p style={{color: 'var(--text-muted)'}}>No assignments posted yet for this student.</p></div>}
                {studentTab === 'quizzes' && <div className="workspace-card-view"><p style={{color: 'var(--text-muted)'}}>No active quizzes for this student.</p></div>}
              </div>
            ) : (
              <div className="expanded-course-workspace-card animated-fade">
                <div className="breadcrumbs">
                  <span className="breadcrumb-nav-link" onClick={() => setSelectedCourse(null)}>Dashboard</span> &gt; <span className="current-crumb">{selectedCourse.title}</span>
                </div>

                <div className="course-header-interactive-row"><h2>{selectedCourse.title}</h2></div>

                <div className="tabs-header-navigation-bar">
                  <button className={`nav-tab-item-btn ${activeCourseTab === 'students' ? 'tab-active' : ''}`} onClick={() => setActiveCourseTab('students')}>Students</button>
                  <button className={`nav-tab-item-btn ${activeCourseTab === 'attendance' ? 'tab-active' : ''}`} onClick={() => setActiveCourseTab('attendance')}>Attendance</button>
                  <button className={`nav-tab-item-btn ${activeCourseTab === 'assignments' ? 'tab-active' : ''}`} onClick={() => setActiveCourseTab('assignments')}>Assignments</button>
                  <button className={`nav-tab-item-btn ${activeCourseTab === 'quizzes' ? 'tab-active' : ''}`} onClick={() => setActiveCourseTab('quizzes')}>Quizzes</button>
                  <button className={`nav-tab-item-btn ${activeCourseTab === 'progress' ? 'tab-active' : ''}`} onClick={() => setActiveCourseTab('progress')}>Course Progress</button>
                </div>

                <div className="tab-render-container">
                  {activeCourseTab === 'students' && (
                    <div className="table-responsive-wrapper">
                      <div className="table-filter-header-flex">
                        <input type="text" placeholder="Search students..." className="table-search-input-box" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        <select className="status-filter-dropdown" defaultValue="All"><option>All</option><option>Enrolled</option><option>Pending</option></select>
                      </div>
                      <table className="client-data-table">
                        <thead>
                          <tr><th>Name</th><th>Roll Number</th><th>Email</th><th>Status</th><th>Action</th></tr>
                        </thead>
                        <tbody>
                          {filteredStudents.map((st, index) => (
                            <tr key={index}>
                              <td>
                                <div className="user-profile-table-cell">
                                  <img src={st.img} alt="" className="avatar-circle-sm" />
                                  <span>{st.name}</span>
                                </div>
                              </td>
                              <td>{st.code}</td>
                              <td>{st.email}</td>
                              <td><span className="badge-enrolled-status">{st.status}</span></td>
                              <td>
                                <button className="eye-action-btn" onClick={() => { setSelectedStudent(st); setStudentTab('attendance'); }} aria-label="View student">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="table-pagination-footer-row">
                        <span className="muted-small-text">Showing {(studentsPage - 1) * PAGE_SIZE + 2}-{Math.min(studentsPage * PAGE_SIZE, TOTAL_STUDENT_RECORDS)} of {TOTAL_STUDENT_RECORDS} records</span>
                        <div className="pagination-buttons-group">
                          <button className="pagination-nav-btn" disabled={studentsPage === 1} onClick={() => setStudentsPage(p => Math.max(1, p - 1))}>Previous</button>
                          {[1, 2].map(p => (
                            <button key={p} className={`pagination-page-num ${studentsPage === p ? 'active-page' : ''}`} onClick={() => setStudentsPage(p)}>{p}</button>
                          ))}
                          <span className="pagination-ellipsis">...</span>
                          <button className={`pagination-page-num ${studentsPage === totalPages ? 'active-page' : ''}`} onClick={() => setStudentsPage(totalPages)}>{totalPages}</button>
                          <button className="pagination-nav-btn" disabled={studentsPage === totalPages} onClick={() => setStudentsPage(p => Math.min(totalPages, p + 1))}>Next</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeCourseTab === 'attendance' && (
                    <div className="attendance-view-block">
                      <div className="attendance-summary-cards-row">
                        <div className="summary-pill-card gray-theme-box"><h5>37</h5><p>Total Students</p></div>
                        <div className="summary-pill-card green-theme-box"><h5>30</h5><p>Present</p></div>
                        <div className="summary-pill-card red-theme-box"><h5>7</h5><p>Absent</p></div>
                      </div>
                      <div className="table-responsive-wrapper">
                        <table className="client-data-table plain-table">
                          <thead><tr><th>Roll #</th><th>Full Name</th><th>Status</th></tr></thead>
                          <tbody>
                            {[
                              ["382282", "Waqar Ali", "PRESENT"], ["463342", "Qaimudin Khuwaja", "NOT MARKED"],
                              ["464127", "Muhammad yaseen", "PRESENT"], ["465184", "Muhammad Masood", "PRESENT"],
                              ["465921", "Muhammad Bin Azam", "NOT MARKED"], ["466584", "Shoaib Ahmed", "PRESENT"],
                              ["466824", "Muhammad Hassan Memon", "PRESENT"]
                            ].map((row, index) => (
                              <tr key={index}>
                                <td>{row[0]}</td>
                                <td>{row[1]}</td>
                                <td><span className={row[2] === 'PRESENT' ? 'badge-present-status' : 'badge-notmarked-status'}>{row[2]}</span></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {activeCourseTab === 'assignments' && (
                    <div className="workspace-card-view">
                      <div className="tab-action-header-row">
                        <h3>Assignments</h3>
                        <button className="new-item-action-btn" onClick={() => alert('New Assignment form coming soon!')}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                          New Assignment
                        </button>
                      </div>
                      <p style={{color: 'var(--text-muted)'}}>No assignments posted yet for this selection.</p>
                    </div>
                  )}
                  {activeCourseTab === 'quizzes' && (
                    <div className="workspace-card-view">
                      <div className="tab-action-header-row">
                        <h3>Quizzes</h3>
                        <button className="new-item-action-btn" onClick={() => alert('New Quiz form coming soon!')}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                          New Quiz
                        </button>
                      </div>
                      <p style={{color: 'var(--text-muted)'}}>No active quizzes configured for this laboratory module.</p>
                    </div>
                  )}
                  {activeCourseTab === 'progress' && (
                    <div className="course-progress-overview-block">
                      <div className="progress-card-inner-frame">
                        <div className="overall-progress-bar-track-container">
                          <span>Module Performance Progress</span>
                          <strong>80% Completed</strong>
                        </div>
                        <div className="modules-accordion-list">
                          <div className="accordion-item-row accomplished"><span>Web Designing Fun Fundamentals</span><span>100%</span></div>
                          <div className="accordion-item-row accomplished"><span>AI Fun Labs & Design Logic</span><span>100%</span></div>
                          <div className="accordion-item-row active-prog"><span>Basic Block Coding Labs</span><span>24%</span></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;