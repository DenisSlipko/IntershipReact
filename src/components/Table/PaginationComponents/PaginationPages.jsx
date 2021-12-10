import { React } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../../store/ActionsCreator';

const PaginationPages = ({ pagesAmount }) => {
  const pagesNumber = [...Array(pagesAmount).keys()];
  const dispatch = useDispatch();
  const handlePage = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <ul className="page-num-container">
      {pagesNumber.map((page) => (
        <li className="page-number" key={page} onClick={() => handlePage(page + 1)}>
          {page + 1}
        </li>
      ))}
    </ul>
  );
};

export default PaginationPages;
