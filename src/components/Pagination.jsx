import { React, useState } from 'react';
import { PaginationPages } from './PaginationPages';
import './style.css';

const Pagination = ({}) => {
  const [paginationConfigList, setPaginationConfigList] = useState([
    { pageSize: '20' },
    { pageSize: '50' },
    { pageSize: '100' },
  ]);
  const [amountElOnPage, setAmountElOnPage] = useState(paginationConfigList[0].pageSize);

  const changeAmountEl = (e) => {
    if (amountElOnPage !== parseInt(e.target.value, 10)) {
      setAmountElOnPage(parseInt(e.target.value, 10));
    }
  };

  return (
    <div className="pagination-container">
      <select className="dropdown-pagination-container" onChange={changeAmountEl}>
        {paginationConfigList.map((item) => (
          <option className="drop-pag-item" key={item.pageSize}>
            {item.pageSize}
          </option>
        ))}
      </select>
      <PaginationPages amountElOnPage={amountElOnPage} />
    </div>
  );
};

export { Pagination };
