import { React } from 'react';
import '../../style.css';

const PaginationPages = ({ totalAmount, amountElOnPage, setCurrentPage }) => {
  const pages = Math.ceil(totalAmount / amountElOnPage);
  const items = [];

  const changePageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  for (let i = 1; i <= pages; i++) {
    items.push(
      <li className="page-number" key={i} onClick={() => changePageHandler(i)}>
        {i}
      </li>
    );
  }

  return <ul className="page-num-container">{items}</ul>;
};

export { PaginationPages };
