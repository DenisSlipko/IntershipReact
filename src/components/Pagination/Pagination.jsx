import { React } from 'react';
import { useHistory } from 'react-router-dom';

import PaginationPages from './PaginationPages';

const PaginationConfigList = [20, 50, 100];

const Pagination = ({ pagesAmount, searchParams, onPageChange, onChangeAmountEl }) => {

  const history = useHistory();

  const handleChangeAmount = (event) => {
    const value = parseInt(event.target.value, 10)
    onChangeAmountEl(value);

    searchParams.set('amount', value);
    history.push({ search: searchParams.toString() })
  }

  return (
  <div className="pagination-container">
    <select className="dropdown-pagination-container" onChange={handleChangeAmount}>
      {PaginationConfigList.map((pageSize) => (
        <option className="drop-pag-item" key={pageSize}>
          {pageSize}
        </option>
      ))}
    </select>
    <PaginationPages pagesAmount={pagesAmount} searchParams={searchParams} onPageChange={onPageChange} />
  </div>
  )
};

export default Pagination;
