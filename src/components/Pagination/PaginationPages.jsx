import { React } from 'react';

const PaginationPages = ({ pagesAmount, onPageChange }) => {
  const pagesNumber = [...Array(pagesAmount).keys()];

  return (
    <ul className="page-num-container">
      {pagesNumber.map((page) => (
        <li className="page-number" key={page} onClick={() => onPageChange(page + 1)}>
          {page + 1}
        </li>
      ))}
    </ul>
  );
};

export default PaginationPages;
