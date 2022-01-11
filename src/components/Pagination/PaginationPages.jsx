import { React } from 'react';
import { useHistory } from 'react-router-dom';

const PaginationPages = ({ pagesAmount, searchParams, onPageChange }) => {
  const pagesNumber = [...Array(pagesAmount).keys()];

  const history = useHistory();

  const handlePageChange = (page) => {
    onPageChange(page);

    searchParams.set('page', page);
    history.push({ search: searchParams.toString() })
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
