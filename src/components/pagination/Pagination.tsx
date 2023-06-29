import React from 'react';
import './pagination.css'

type PaginationProps = {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    const getPageNumbers = () => {
        const pageNumbers = [];

        // Agregar números de página antes y después de la página actual
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
            if (i > 0 && i <= totalPages) {
                pageNumbers.push(i);
            }
        }

        return pageNumbers;
    };

    const handlePageChange = (page: number) => {
        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    return (
        <ul className="pagination-container">
            {currentPage !== 1 && (
                <li className="page-item">
                    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                        Anterior
                    </button>
                </li>
            )}

            {getPageNumbers().map((pageNumber) => (
                <li className={`page-item ${pageNumber === currentPage ? 'active' : ''}`} key={pageNumber}>
                    <button className="page-link" onClick={() => handlePageChange(pageNumber)}>
                        {pageNumber}
                    </button>
                </li>
            ))}

            {currentPage !== totalPages && (
                <li className="page-item">
                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                        Siguiente
                    </button>
                </li>
            )}
        </ul>
    );
};

export default Pagination;

