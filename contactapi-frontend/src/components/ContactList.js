import React from 'react';
import Contact from './Contact';

const ContactList = ({ data, currentPage, getAllContacts }) => {
    const handlePageClick = (page) => {
        if (page >= 0 && page < data.totalPages) {
            getAllContacts(page);
        }
    };

    return (
        <main className="main">
            <style>
                {`
                .main {
                    padding: 1rem;
                }

                .empty-state {
                    text-align: center;
                    padding: 2rem;
                    color: #666;
                    font-style: italic;
                }

                .contact__list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: grid;
                    gap: 1rem;
                }

                .pagination {
                    display: flex;
                    justify-content: center;
                    gap: 0.5rem;
                    margin-top: 2rem;
                }

                .pagination-btn {
                    padding: 0.5rem 1rem;
                    border: none;
                    background: #f0f0f0;
                    cursor: pointer;
                    border-radius: 6px;
                    transition: background 0.3s;
                    font-weight: bold;
                }

                .pagination-btn:hover {
                    background: #e0e0e0;
                }

                .pagination-btn.active {
                    background: #007bff;
                    color: white;
                }

                .pagination-btn.disabled {
                    background: #ccc;
                    cursor: not-allowed;
                }
                `}
            </style>

            {data?.content?.length === 0 && (
                <div className="empty-state">No Contacts. Please add a new contact.</div>
            )}

            <ul className="contact__list">
                {data?.content?.length > 0 &&
                    data.content.map((contact) => (
                        <Contact contact={contact} key={contact.id} />
                    ))}
            </ul>

            {data?.content?.length > 0 && data?.totalPages > 1 && (
                <div className="pagination">
                    <button
                        onClick={() => handlePageClick(currentPage - 1)}
                        className={`pagination-btn ${currentPage === 0 ? 'disabled' : ''}`}
                        disabled={currentPage === 0}
                    >
                        &laquo;
                    </button>

                    {[...Array(data.totalPages).keys()].map((page) => (
                        <button
                            onClick={() => handlePageClick(page)}
                            className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                            key={page}
                        >
                            {page + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageClick(currentPage + 1)}
                        className={`pagination-btn ${currentPage + 1 === data.totalPages ? 'disabled' : ''}`}
                        disabled={currentPage + 1 === data.totalPages}
                    >
                        &raquo;
                    </button>
                </div>
            )}
        </main>
    );
};

export default ContactList;
