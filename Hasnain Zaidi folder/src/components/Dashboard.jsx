import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentMenu, setCurrentMenu] = useState('dashboard'); // 'dashboard' or 'calendar'
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeCourseTab, setActiveCourseTab] = useState('students');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const courses = [
    {
      id: "CRS-001",
      title: "Little Geniuses: Coding, Design & AI Fun Lab",
      type: "LAB | Male",
      campus: "SMIT Ghotki Campus (Ghotki )",
      batch: "Batch 1",
      progress: 0,
      enrolled: 4,
      schedule: "Sat 04:00 PM - 06:00 PM | Sun 04:00 PM - 06:00 PM",
      startedOn: "1 Jun 2026",
      bgHeader: "#e6fdf4", 
      accentColor: "#10b981"
    },
    {
      id: "CRS-002",
      title: "Little Geniuses: Coding, Design & AI Fun Lab",
      type: "LAB | Female",
      campus: "SMIT Ghotki Campus (Ghotki )",
      batch: "Batch 1",
      progress: 0,
      enrolled: 8,
      schedule: "Sat 12:00 PM - 02:00 PM | Sun 12:00 PM - 02:00 PM",
      startedOn: "1 Jun 2026",
      bgHeader: "#eff2fe",
      accentColor: "#4f46e5"
    },
    {
      id: "CRS-003",
      title: "Little Geniuses: Coding, Design & AI Fun Lab",
      type: "LAB | Female",
      campus: "SMIT Ghotki Campus (Ghotki )",
      batch: "Batch 1",
      progress: 0,
      enrolled: 0,
      schedule: "Sat 10:00 AM - 12:00 PM | Sun 10:00 AM - 12:00 PM",
      startedOn: "1 Jun 2026",
      bgHeader: "#f8fafc",
      accentColor: "#64748b"
    },
    {
      id: "CRS-004",
      title: "Modern Web Application Development",
      type: "LAB | Female",
      campus: "SMIT Ghotki Campus (Ghotki )",
      batch: "Batch 3",
      progress: 25,
      enrolled: 30,
      schedule: "Sat 08:00 AM - 10:00 AM | Sun 08:00 AM - 10:00 AM",
      startedOn: "1 Jan 2026",
      bgHeader: "#ffebe9",
      accentColor: "#ef4444"
    }
  ];

  const studentsData = [
    { name: "Abdul Jabbar", code: "477526", email: "abjabbargopang@gmail.com", status: "ENROLLED", img: "https://img.jsdesign.hk/assets/img/6620ca9b6bda6fa0060cf476.jpg" },
    { name: "Abdul rafay", code: "469955", email: "rafaygameti0345@gmail.com", status: "ENROLLED", img: "https://img.jsdesign.hk/assets/img/6620ca9b6bda6fa0060cf476.jpg" },
    { name: "Abdul salam shaikh", code: "475436", email: "abdulsalam06699@gmail.com", status: "ENROLLED", img: "https://img.jsdesign.hk/assets/img/6620ca9b6bda6fa0060cf476.jpg" },
    { name: "Abdullah Khan", code: "470278", email: "ak1636802@gmail.com", status: "ENROLLED", img: "https://img.jsdesign.hk/assets/img/6620ca9b6bda6fa0060cf476.jpg" }
  ];

  const filteredStudents = studentsData.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) || student.code.includes(searchQuery)
  );

  return (
    <div className="portal-container">
      
      {/* ================= SIDEBAR ================= */}
      <aside className={`sidebar ${isSidebarOpen ? 'expanded' : 'collapsed'}`}>
        <div className="toggle-trigger-action" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          )}
        </div>

        <div className="logo-container-vertical">
          <img src="https://i.ibb.co/q3c3CkLS/titan-logo.jpg" alt="SMIT" className="titan-logo-large" />
          {isSidebarOpen && <h3 className="logo-text-bottom">TITAN</h3>}
        </div>

        <nav className="nav-menu">
          <div className={`nav-item ${currentMenu === 'dashboard' ? 'active' : ''}`} onClick={() => { setCurrentMenu('dashboard'); setSelectedCourse(null); }}>
            <svg className="nav-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
            {isSidebarOpen && <span className="nav-text">Dashboard</span>}
          </div>

          <div className={`nav-item ${currentMenu === 'calendar' ? 'active' : ''}`} onClick={() => setCurrentMenu('calendar')}>
            <svg className="nav-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            {isSidebarOpen && <span className="nav-text">Calendar</span>}
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile-wrapper">
            <img src="https://img.jsdesign.hk/assets/img/6620ca9b6bda6fa0060cf476.jpg" alt="Avatar" className="table-avatar-img" />
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
        
        {currentMenu === 'calendar' ? (
          /* CALENDAR MENU SUB-VIEW */
          <div className="workspace-card-view animated-fade">
            <div className="breadcrumbs">
              <span>Dashboard</span> &gt; <span className="current-crumb">Calendar Schedule</span>
            </div>
            <h2>Academic Master Calendar</h2>
            <div className="full-calendar-mock-frame">
              <div className="calendar-header-controls">
                <h4>June 2026</h4>
                <div>
                  <button className="small-action-btn">&lt;</button>
                  <button className="small-action-btn">Today</button>
                  <button className="small-action-btn">&gt;</button>
                </div>
              </div>
              <div className="calendar-grid-days">
                {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => <div key={d} className="calendar-day-label">{d}</div>)}
                {Array.from({length: 30}, (_, i) => (
                  <div key={i} className={`calendar-date-cell ${i+1 === 17 ? 'marked-highlight' : ''}`}>
                    <span>{i + 1}</span>
                    {i+1 === 17 && <div className="event-tag-bubble">Web Dev Session</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* DASHBOARD & COURSE SUB-VIEW */
          <>
            {/* TOP STATS AND COMPACT TEACHING SCHEDULE ROW */}
            <section className="stats-grid-row">
              <div className="stat-card">
                <div className="stat-content">
                  <h3>6</h3>
                  <p>Active Courses</p>
                </div>
                <div className="stat-badge-icon green-icon">📁</div>
              </div>

              <div className="stat-card">
                <div className="stat-content">
                  <h3>102</h3>
                  <p>Enrolled Students</p>
                </div>
                <div className="stat-badge-icon blue-icon">👥</div>
              </div>

              <div className="stat-card">
                <div className="stat-content">
                  <h3>0</h3>
                  <p>Total Assignments</p>
                </div>
                <div className="stat-badge-icon purple-icon">📝</div>
              </div>

              <div className="schedule-compact-widget">
                <div className="schedule-title-row">📅 Teaching Schedule</div>
                <div className="schedule-days-flex">
                  <div className="day-pill present">Su <span>14</span></div>
                  <div className="day-pill present">Mo <span>15</span></div>
                  <div className="day-pill">Tu <span>16</span></div>
                  <div className="day-pill current">We <span>17</span></div>
                  <div className="day-pill">Th <span>18</span></div>
                  <div className="day-pill present">Fr <span>19</span></div>
                  <div className="day-pill present">Sa <span>20</span></div>
                </div>
              </div>
            </section>

            {/* IF NO COURSE SELECTED, SHOW GRID */}
            {!selectedCourse ? (
              <>
                <div className="section-title-bar">
                  <h3>Active Courses</h3>
                </div>
                <section className="courses-responsive-grid">
                  {courses.map((course) => (
                    <div key={course.id} className="course-clean-card" onClick={() => { setSelectedCourse(course); setActiveCourseTab('students'); }}>
                      <div className="card-top-accent" style={{ backgroundColor: course.bgHeader }}>
                        <div>
                          <h4>{course.title}</h4>
                          <span className="subtitle-tag">{course.type}</span>
                        </div>
                        <span className="batch-outline-pill">{course.batch}</span>
                      </div>
                      <div className="card-body-content">
                        <p className="location-text"><span className="geo-icon">📍</span> {course.campus}</p>
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
                          <div>👥 Enrolled: {course.enrolled} students</div>
                          <div>🕒 {course.schedule}</div>
                          <div className="date-stamped">🗓️ Started On: {course.startedOn}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              </>
            ) : (
              /* INDIVIDUAL COURSE INNER WORKSPACE VIEW (MATCHES CLIENT SCREENSHOTS PERFECTLY) */
              <div className="expanded-course-workspace-card animated-fade">
                <div className="breadcrumbs">
                  <span className="breadcrumb-nav-link" onClick={() => setSelectedCourse(null)}>Dashboard</span> &gt; <span className="current-crumb">{selectedCourse.title}</span>
                </div>

                <div className="course-header-interactive-row">
                  <h2>{selectedCourse.title}</h2>
                  {activeCourseTab === 'assignments' && <button className="add-assignment-button-primary">+ New Assignment</button>}
                </div>

                {/* TAB CONTROLS FRAME */}
                <div className="tabs-header-navigation-bar">
                  <button className={`nav-tab-item-btn ${activeCourseTab === 'students' ? 'tab-active' : ''}`} onClick={() => setActiveCourseTab('students')}>👥 Students</button>
                  <button className={`nav-tab-item-btn ${activeCourseTab === 'attendance' ? 'tab-active' : ''}`} onClick={() => setActiveCourseTab('attendance')}>📅 Attendance</button>
                  <button className={`nav-tab-item-btn ${activeCourseTab === 'assignments' ? 'tab-active' : ''}`} onClick={() => setActiveCourseTab('assignments')}>📝 Assignments</button>
                  <button className={`nav-tab-item-btn ${activeCourseTab === 'quizzes' ? 'tab-active' : ''}`} onClick={() => setActiveCourseTab('quizzes')}>✔️ Quizzes</button>
                  <button className={`nav-tab-item-btn ${activeCourseTab === 'progress' ? 'tab-active' : ''}`} onClick={() => setActiveCourseTab('progress')}>📊 Course Progress</button>
                </div>

                {/* RENDERING INDIVIDUAL CONTENT TABS WITH CLEAN TABLES */}
                <div className="tab-render-container">
                  {activeCourseTab === 'students' && (
                    <div className="table-responsive-wrapper">
                      <div className="table-filter-header-flex">
                        <input type="text" placeholder="Search students..." className="table-search-input-box" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        <select className="table-select-dropdown"><option>All</option></select>
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
                              <td className="font-numeric-mono">{st.code}</td>
                              <td>{st.email}</td>
                              <td><span className="badge-enrolled-status">{st.status}</span></td>
                              <td><button className="icon-view-action-btn">👁️</button></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {activeCourseTab === 'attendance' && (
                    <div className="attendance-view-block">
                      <div className="date-select-row-container">
                        <label>Select a Date</label>
                        <input type="text" className="date-read-only-box" value="Wed Jun 17 2026" readOnly />
                      </div>
                      <div className="attendance-summary-cards-row">
                        <div className="summary-pill-card gray-theme-box"><h5>37</h5><p>Total Students</p></div>
                        <div className="summary-pill-card green-theme-box"><h5>30</h5><p>Present</p></div>
                        <div className="summary-pill-card yellow-theme-box"><h5>0</h5><p>Leave</p></div>
                        <div className="summary-pill-card red-theme-box"><h5>7</h5><p>Absent</p></div>
                      </div>
                      <h4 className="centered-attendance-title">Attendance for Wed Jun 17 2026</h4>
                      <table className="client-data-table plain-table">
                        <thead><tr><th>Roll #</th><th>Full Name</th><th>Status</th></tr></thead>
                        <tbody>
                          <tr><td>382282</td><td>Waqar Ali</td><td><span className="badge-present-status">PRESENT</span></td></tr>
                          <tr><td>463342</td><td>Qaimudin Khuwaja</td><td><span className="badge-notmarked-status">NOT MARKED</span></td></tr>
                          <tr><td>464127</td><td>Muhammad yaseen</td><td><span className="badge-present-status">PRESENT</span></td></tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {activeCourseTab === 'assignments' && (
                    <div className="assignments-list-block">
                      <table className="client-data-table">
                        <thead><tr><th>Title</th><th>Description</th><th>Topics</th><th>Due Date</th><th>Actions</th></tr></thead>
                        <tbody>
                          <tr><td>File management vs dbms (theory...</td><td>theory assignment</td><td>No topics</td><td>Jun 12, 2026</td><td>👁️ 📝</td></tr>
                          <tr><td>Galary_App_API_ASSIGNMENT</td><td>Tasks to Complete Add Loading State</td><td>No topics</td><td>Jun 2, 2026</td><td>👁️ 📝</td></tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {activeCourseTab === 'quizzes' && (
                    <div className="quizzes-list-block">
                      <table className="client-data-table">
                        <thead><tr><th>Quiz</th><th>Course(s)</th><th>Date</th><th>Expiry</th><th>Status</th></tr></thead>
                        <tbody>
                          <tr><td>Javascript (Quiz-4)</td><td>Modern Web Application Development</td><td>Jun 15, 2026</td><td>Jun 15, 2026</td><td><span className="badge-present-status">ACTIVE</span></td></tr>
                          <tr><td>Javascript (Quiz-3)</td><td>Modern Web Application Development</td><td>May 22, 2026</td><td>May 22, 2026</td><td><span className="badge-present-status">ACTIVE</span></td></tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {activeCourseTab === 'progress' && (
                    <div className="course-progress-overview-block">
                      <div className="progress-card-inner-frame">
                        <div className="progress-flex-meta-row">
                          <strong>Sir Yasir Ali (SUK) - Saylani TITAN Sukkur Campus <span className="batch-badge">Batch 1</span></strong>
                          <span className="topics-count-badge">Topics: 65/81</span>
                        </div>
                        <div className="overall-progress-bar-track-container">
                          <span>Overall progress</span>
                          <strong>80%</strong>
                        </div>
                        <div className="modules-accordion-list">
                          <div className="accordion-item-row accomplished">✔️ Web Designing Module <span>100%</span></div>
                          <div className="accordion-item-row accomplished">✔️ Front-End Development <span>100%</span></div>
                          <div className="accordion-item-row in-progress">⏳ Modern Front-End Development <span>93%</span></div>
                          <div className="accordion-item-row pending">⏳ Back-End Development <span>6%</span></div>
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