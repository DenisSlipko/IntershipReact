import { React } from 'react';

const PaginationPages = ({ pagesAmount, onPageChange }) => {
  const pagesNumber = [...Array(pagesAmount).keys()];

  const handlePageChange = (page) => {
    onPageChange(page);
  }

  return (
    <ul className="page-num-container">
      {pagesNumber.map((page) => (
        <li className="page-number" key={page} onClick={() => handlePageChange(page + 1)}>
          {page + 1}
        </li>
      ))}
    </ul>
  );
};

export default PaginationPages;
