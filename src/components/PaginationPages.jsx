import { React } from 'react';
import './style.css';

const PaginationPages = ({ totalAmount = 40, amountElOnPage }) => {
  const pages = Math.ceil(totalAmount / amountElOnPage);
  const items = [];

  for (let i = 1; i <= pages; i++) {
    items.push(
      <li className="page-number" key={i}>
        {i}
      </li>
    );
  }

  return <ul className="page-num-container">{items}</ul>;
};

export { PaginationPages };
