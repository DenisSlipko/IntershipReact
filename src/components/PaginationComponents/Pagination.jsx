import { React } from 'react';
import { PaginationPages } from './PaginationPages';
import '../style.css';

const Pagination = ({ setCurrentPage, setAmountElOnPage, amountElOnPage }) => {
  const paginationConfigList = [{ pageSize: '20' }, { pageSize: '50' }, { pageSize: '100' }];

  const changeAmountElHandler = (e) => {
    if (amountElOnPage !== parseInt(e.target.value, 10)) {
      setAmountElOnPage(parseInt(e.target.value, 10));
    }
  };

  return (
    <div className="pagination-container">
      <select className="dropdown-pagination-container" onChange={changeAmountElHandler}>
        {paginationConfigList.map((item) => (
          <option className="drop-pag-item" key={item.pageSize}>
            {item.pageSize}
          </option>
        ))}
      </select>
      <PaginationPages amountElOnPage={amountElOnPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export { Pagination };
