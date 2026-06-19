import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const courses = [
    {
      title: "Little Geniuses: Coding, Design & AI Fun Lab",
      type: "LAB | Male",
      campus: "Taj Institute of Technology and Applied Networks",
      batch: "Batch 1",
      progress: 0,
      enrolled: 4,
      schedule: "Sat 04:00 PM - 06:00 PM | Sun 04:00 PM - 06:00 PM",
      started: "1 Jun 2026",
      bgColor: "#e8f5e9"
    },
    {
      title: "Little Geniuses: Coding, Design & AI Fun Lab",
      type: "LAB | Female",
      campus: "Taj Institute of Technology and Applied Networks",
      batch: "Batch 1",
      progress: 0,
      enrolled: 8,
      schedule: "Sat 12:00 PM - 02:00 PM | Sun 12:00 PM - 02:00 PM",
      started: "1 Jun 2026",
      bgColor: "#e8eaf6"
    },
    {
      title: "Little Geniuses: Coding, Design & AI Fun Lab",
      type: "LAB | Female",
      campus: "Taj Institute of Technology and Applied Networks",
      batch: "Batch 1",
      progress: 0,
      enrolled: 0,
      schedule: "Sat 10:00 AM - 12:00 PM | Sun 10:00 AM - 12:00 PM",
      started: "1 Jun 2026",
      bgColor: "#f5f5f5"
    },
    {
      title: "Modern Web Application Development",
      type: "LAB | Female",
      campus: "Taj Institute of Technology and Applied Networks",
      batch: "Batch 3",
      progress: 25,
      enrolled: 30,
      schedule: "Sat 08:00 AM - 10:00 AM | Sun 08:00 AM - 10:00 AM",
      started: "1 Jan 2026",
      bgColor: "#ffebee"
    },
    {
      title: "Modern Web Application Development",
      type: "LAB | Male",
      campus: "Taj Institute of Technology and Applied Networks",
      batch: "Batch 3",
      progress: 0,
      enrolled: 0,
      schedule: "Sat 08:00 AM - 10:00 AM | Sun 08:00 AM - 10:00 AM",
      started: "1 Jun 2026",
      bgColor: "#e0f7fa"
    },
    {
      title: "Modern Web Application Development",
      type: "LAB | Male",
      campus: "Taj Institute of Technology and Applied Networks", 
      batch: "Batch 1",
      progress: 0,
      enrolled: 0,
      schedule: "Sat 02:00 PM - 04:00 PM | Sun 02:00 PM - 04:00 PM",
      started: "1 Jun 2026",
      bgColor: "#e8eaf6" 
    }
  ];

  return (
    <div className="portal-container">
      
      {/* ================= SIDEBAR ================= */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'}`}>
        <div className="logo-container" onClick={toggleSidebar}>
          <img 
            src="https://i.ibb.co/q3c3CkLS/titan-logo.jpg" 
            alt="TITAN Logo" 
            className="titan-logo" 
          />
          {isSidebarOpen && <span className="logo-text">TITAN</span>}
          <span className="toggle-arrow">{isSidebarOpen ? '«' : '»'}</span>
        </div>

        <nav className="nav-menu">
          <div className="nav-item active">
            <span className="dot-icon active-dot"></span>
            {isSidebarOpen && <span className="nav-text">Dashboard</span>}
          </div>
          <div className="nav-item">
            <span className="dot-icon"></span>
            {isSidebarOpen && <span className="nav-text">Calendar</span>}
          </div>
          <div className="nav-item">
            <span className="dot-icon"></span>
            {isSidebarOpen && <span className="nav-text">Attendance</span>}
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="avatar-mock">YA</div>
          {isSidebarOpen && (
            <div className="trainer-info">
              <h4>Sir Yasir Ali (SUK)</h4>
              <p>Trainer</p>
            </div>
          )}
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
        <header className="content-header">
          <div className="header-title-area">
            <h2>Dashboard</h2>
            <h1 className="titan-main-title">Taj Institute of Technology and Applied Networks</h1>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="stats-grid">
          <div className="stat-card">
            <div>
              <h3>6</h3>
              <p>Active Courses</p>
            </div>
            <div className="stat-indicator green-indicator"></div>
          </div>

          <div className="stat-card">
            <div>
              <h3>102</h3>
              <p>Enrolled Students</p>
            </div>
            <div className="stat-indicator blue-indicator"></div>
          </div>

          <div className="stat-card">
            <div>
              <h3>0</h3>
              <p>Total Assignments</p>
            </div>
            <div className="stat-indicator purple-indicator"></div>
          </div>

          {/* Teaching Schedule */}
          <div className="schedule-widget">
            <h4>Teaching Schedule</h4>
            <div className="days-row">
              <div className="day active">Sun <span>14</span></div>
              <div className="day active">Mon <span>15</span></div>
              <div className="day">Tue <span>16</span></div>
              <div className="day active">Wed <span>17</span></div>
              <div className="day">Thu <span>18</span></div>
              <div className="day active">Fri <span>19</span></div>
              <div className="day active">Sat <span>20</span></div>
            </div>
          </div>
        </section>

        <h4 className="section-title">Active Courses</h4>

        {/* Course Cards */}
        <section className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card" style={{ borderTop: `6px solid ${course.bgColor}` }}>
              <div className="course-header" style={{ backgroundColor: course.bgColor }}>
                <div>
                  <h4>{course.title}</h4>
                  <span className="course-type">{course.type}</span>
                </div>
                <span className="batch-tag">{course.batch}</span>
              </div>
              
              <div className="course-body">
                <p className="campus-name">{course.campus}</p>
                
                <div className="progress-container">
                  <div className="progress-text">
                    <span>Progress</span>
                    <span>{course.progress}% Completed</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>

                <div className="course-details">
                  <div className="detail-item">
                    <span className="detail-label">Students Enrolled:</span> {course.enrolled}
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Schedule:</span> {course.schedule}
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Started On:</span> {course.started}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

    </div>
  );
};

export default Dashboard;