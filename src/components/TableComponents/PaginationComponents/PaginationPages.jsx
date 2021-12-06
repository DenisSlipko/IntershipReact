import { React } from 'react';
import '../../style.css';

const PaginationPages = ({ totalAmount, amountElOnPage, handlePageChanges }) => {
  const pagesAmount = Math.ceil(totalAmount / amountElOnPage);
  const items = Array(pagesAmount)
    .fill()
    .map((_, i) => i + 1);

  return (
    <ul className="page-num-container">
      {items.map((item) => (
        <li className="page-number" key={item} onClick={() => handlePageChanges(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export { PaginationPages };
