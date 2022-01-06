import { React } from 'react';

import PaginationPages from './PaginationPages';

const PaginationConfigList = [20, 50, 100];

const Pagination = ({ pagesAmount, onPageChange, onChangeAmountEl }) => {

  const handleChangeAmountEl = (event) => {
    onChangeAmountEl(parseInt(event.target.value, 10));
  }

  return (
  <div className="pagination-container">
    <select className="dropdown-pagination-container" onChange={handleChangeAmountEl}>
      {PaginationConfigList.map((pageSize) => (
        <option className="drop-pag-item" key={pageSize}>
          {pageSize}
        </option>
      ))}
    </select>
    <PaginationPages pagesAmount={pagesAmount} onPageChange={onPageChange} />
  </div>
  )
};

export default Pagination;
