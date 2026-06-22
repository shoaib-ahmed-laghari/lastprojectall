import React, { useState } from 'react';
import { Table, Badge, Pagination, Row, Col, Breadcrumb } from 'react-bootstrap';
import { FiTrash2 } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';

const QuizResults = () => {
    // Image ka exact mock data
    const [results, setResults] = useState([
        { id: 1, name: "Shahbaz Ali", email: "Ahmedshahbazsoomro@gmail.com", quizTitle: "Javascript (Quiz-4)", status: "FAILED", score: "10 / 40", attempts: 1, date: "Jun 15, 2026, 3:57:02 PM" },
        { id: 2, name: "Ayan Arain", email: "msayanarain846@gmail.com", quizTitle: "Javascript (Quiz-4)", status: "FAILED", score: "11 / 40", attempts: 1, date: "Jun 15, 2026, 3:56:51 PM" },
        { id: 3, name: "Abdul Jabbar", email: "abjabbargopang@gmail.com", quizTitle: "Javascript (Quiz-4)", status: "FAILED", score: "7 / 40", attempts: 1, date: "Jun 15, 2026, 3:56:45 PM" },
        { id: 4, name: "Ayan Mehmood Shah Syed", email: "alyaly3036@gmail.com", quizTitle: "Javascript (Quiz-4)", status: "FAILED", score: "22 / 40", attempts: 1, date: "Jun 15, 2026, 3:56:40 PM" },
        { id: 5, name: "Muhammad Hassan Memon", email: "hm0078275@gmail.com", quizTitle: "Javascript (Quiz-4)", status: "FAILED", score: "17 / 40", attempts: 1, date: "Jun 15, 2026, 3:53:25 PM" },
        { id: 6, name: "Ashraf Ali", email: "Hamad@1947gmail.com", quizTitle: "Javascript (Quiz-4)", status: "FAILED", score: "16 / 40", attempts: 1, date: "Jun 15, 2026, 3:52:44 PM" },
        { id: 7, name: "Hameed Ud din", email: "hameeduddinbuttsuk@gmail.com", quizTitle: "Javascript (Quiz-4)", status: "FAILED", score: "9 / 40", attempts: 1, date: "Jun 15, 2026, 3:52:33 PM" },
        { id: 8, name: "Shoaib Ahmed", email: "shoaibahmedlaghari34@gmail.com", quizTitle: "Javascript (Quiz-4)", status: "FAILED", score: "20 / 40", attempts: 1, date: "Jun 15, 2026, 3:52:25 PM" },
        { id: 9, name: "Muhammad badal", email: "my4089082@gmail.com", quizTitle: "Javascript (Quiz-4)", status: "FAILED", score: "9 / 40", attempts: 1, date: "Jun 15, 2026, 3:52:09 PM" },
        { id: 10, name: "Syed Hasnain Zaidi", email: "drzaidi156@gmail.com", quizTitle: "Javascript (Quiz-4)", status: "FAILED", score: "10 / 40", attempts: 1, date: "Jun 15, 2026, 3:48:53 PM" }
    ]);

    const [currentPage, setCurrentPage] = useState(1);

    // Delete Functionality
    const handleDelete = (id) => {
        if (window.confirm("Kya aap waqai ye record delete karna chahte hain?")) {
            setResults(results.filter(item => item.id !== id));
        }
    };

    return (
        // useContext error se bachne ke liye standard bootstrap class wrapper use kiya hai
        <div className="container-fluid px-4 py-4" style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>

            {/* Breadcrumb Navigation */}
            <Breadcrumb className="mb-4 small">
                <Breadcrumb.Item href="#" style={{ textDecoration: 'none', color: '#6c757d' }}>
                    <AiOutlineHome className="me-1" /> Dashboard
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#" style={{ textDecoration: 'none', color: '#6c757d' }}>
                    Modern Web Application Development
                </Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: '#212529' }}>quiz</Breadcrumb.Item>
            </Breadcrumb>

            {/* Page Heading */}
            <h3 className="fw-bold mb-4" style={{ color: '#111827', letterSpacing: '-0.5px' }}>Quiz Results</h3>

            {/* Main Responsive Table Section */}
            <div className="bg-white p-4 rounded-3 border" style={{ borderColor: '#e5e7eb', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)' }}>
                <div className="table-responsive">
                    <Table hover align="middle" className="mb-0 text-nowrap">
                        <thead>
                            <tr style={{ color: '#6b7280', fontSize: '14px', backgroundColor: '#f9fafb', borderBottom: '2px solid #f3f4f6' }}>
                                <th className="py-3 fw-medium">Name</th>
                                <th className="py-3 fw-medium">Email</th>
                                <th className="py-3 fw-medium">Quiz Title</th>
                                <th className="py-3 fw-medium">Status</th>
                                <th className="py-3 fw-medium">Score</th>
                                <th className="py-3 fw-medium">Attempts</th>
                                <th className="py-3 fw-medium">Date</th>
                                <th className="py-3 fw-medium text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: '14px', color: '#374151' }}>
                            {results.length > 0 ? (
                                results.map((row) => (
                                    <tr key={row.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td className="py-3 fw-semibold" style={{ color: '#111827' }}>{row.name}</td>
                                        <td className="py-3 text-muted">{row.email}</td>
                                        <td className="py-3">{row.quizTitle}</td>
                                        <td className="py-3">
                                            <Badge
                                                bg="none"
                                                style={{
                                                    backgroundColor: '#fef2f2',
                                                    color: '#ef4444',
                                                    fontWeight: '600',
                                                    padding: '6px 12px',
                                                    fontSize: '11px',
                                                    borderRadius: '6px',
                                                    border: '1px solid #fee2e2'
                                                }}
                                            >
                                                {row.status}
                                            </Badge>
                                        </td>
                                        <td className="py-3 fw-medium">{row.score}</td>
                                        <td className="py-3 text-center" style={{ width: '80px' }}>{row.attempts}</td>
                                        <td className="py-3 text-muted">{row.date}</td>
                                        <td className="py-3 text-center">
                                            <button
                                                onClick={() => handleDelete(row.id)}
                                                style={{ background: 'none', border: 'none', color: '#9ca3af', padding: '4px' }}
                                                onMouseOver={(e) => e.currentTarget.style.color = '#ef4444'}
                                                onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
                                                title="Delete Result"
                                            >
                                                <FiTrash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center py-5 text-muted fw-medium">
                                        No quiz records found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>

            {/* Pagination & Footer Footer */}
            <Row className="mt-4 align-items-center">
                <Col sm={6} className="text-muted small text-start mb-3 mb-sm-0 fw-medium">
                    Showing 1-{results.length} of {results.length} records
                </Col>
                <Col sm={6} className="d-flex justify-content-sm-end justify-content-start">
                    <Pagination className="mb-0 small shadow-sm">
                        <Pagination.Prev disabled style={{ color: '#374151' }}>‹ Previous</Pagination.Prev>
                        <Pagination.Item active={currentPage === 1} onClick={() => setCurrentPage(1)}>{1}</Pagination.Item>
                        <Pagination.Item active={currentPage === 2} onClick={() => setCurrentPage(2)}>{2}</Pagination.Item>
                        <Pagination.Item active={currentPage === 3} onClick={() => setCurrentPage(3)}>{3}</Pagination.Item>
                        <Pagination.Item active={currentPage === 4} onClick={() => setCurrentPage(4)}>{4}</Pagination.Item>
                        <Pagination.Next style={{ color: '#374151' }}>Next ›</Pagination.Next>
                    </Pagination>
                </Col>
            </Row>
        </div>
    );
};

export default QuizResults;