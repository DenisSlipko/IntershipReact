import { React } from 'react';
import { PaginationPages } from './PaginationPages';
import '../../style.css';

const paginationConfigList = [{ pageSize: '20' }, { pageSize: '50' }, { pageSize: '100' }];

const Pagination = ({ handlePageChanges, handleAmountElChanges, amountElOnPage, totalAmount }) => {
  return (
    <div className="pagination-container">
      <select className="dropdown-pagination-container" onChange={handleAmountElChanges}>
        {paginationConfigList.map(({ pageSize }) => (
          <option className="drop-pag-item" key={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
      <PaginationPages
        amountElOnPage={amountElOnPage}
        handlePageChanges={handlePageChanges}
        totalAmount={totalAmount}
      />
    </div>
  );
};

export { Pagination };
