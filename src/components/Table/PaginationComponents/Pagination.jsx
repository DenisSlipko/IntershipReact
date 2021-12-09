import { React } from 'react';

import PaginationPages from './PaginationPages';

const PaginationConfigList = [{ pageSize: '20' }, { pageSize: '50' }, { pageSize: '100' }];

const Pagination = ({ pagesAmount, onPageChange, onChangeAmountEl }) => (
  <div className="pagination-container">
    <select className="dropdown-pagination-container" onChange={onChangeAmountEl}>
      {PaginationConfigList.map(({ pageSize }) => (
        <option className="drop-pag-item" key={pageSize}>
          {pageSize}
        </option>
      ))}
    </select>
    <PaginationPages onPageChange={onPageChange} pagesAmount={pagesAmount} />
  </div>
);

export default Pagination;
