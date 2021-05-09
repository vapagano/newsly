import React from 'react';
import { NavLink } from 'react-router-dom';

export interface IPaginationProps {
  totalCount: number
  currentPage: number
  pagesToShow: number
  query?: string
}

const Pagination: React.FC<IPaginationProps> = ({
  totalCount,
  currentPage,
  pagesToShow,
  query
}) => {
  
  const getPaginationGroup = () => {
    let start: number = Math.floor((currentPage - 1) / pagesToShow) * pagesToShow;
    return new Array(pagesToShow).fill(0).map((_, idx) => start + idx + 1);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage <= 1 ? "disabled" : ""}`}>
          <NavLink to={`/?${query && `q=${query}&` }page=${currentPage - 1}`} className="page-link">
              {'<<'}
          </NavLink>
        </li>
        {getPaginationGroup().map((item, index) => (
          <li
            className={`page-item ${currentPage === item ? 'active' : null}`}
            key={index}
          >
            <NavLink to={`/?${query && `q=${query}&` }page=${item}`} className="page-link">
              {item}
            </NavLink>
          </li>
        ))}
        <li className={`page-item ${currentPage >= totalCount ? "disabled" : ""}`}>
          <NavLink to={`/?${query && `q=${query}&` }page=${currentPage + 1}`} className="page-link">
              {'>>'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
