import { React } from 'react';
import '../../style.css';

const PaginationPages = ({ pagesAmount, onPageChanges }) => {
  const pagesNumber = Array(pagesAmount)
    .fill()
    .map((_, i) => i + 1);

  return (
    <ul className="page-num-container">
      {pagesNumber.map((item) => (
        <li className="page-number" key={item} onClick={() => onPageChanges(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default PaginationPages;
