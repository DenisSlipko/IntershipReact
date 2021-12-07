import { React } from 'react';
import PaginationPages from './PaginationPages';
import '../../style.css';

const PaginationConfigList = [{ pageSize: '20' }, { pageSize: '50' }, { pageSize: '100' }];

const Pagination = ({ onPageChanges, onAmountElChanges, pagesAmount }) => (
  <div className="pagination-container">
    <select className="dropdown-pagination-container" onChange={onAmountElChanges}>
      {PaginationConfigList.map(({ pageSize }) => (
        <option className="drop-pag-item" key={pageSize}>
          {pageSize}
        </option>
      ))}
    </select>
    <PaginationPages onPageChanges={onPageChanges} pagesAmount={pagesAmount} />
  </div>
);

export default Pagination;
