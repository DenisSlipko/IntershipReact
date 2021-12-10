import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAmountElOnPage } from '../../../store/ActionsCreator';

import PaginationPages from './PaginationPages';

const PaginationConfigList = [{ pageSize: '20' }, { pageSize: '50' }, { pageSize: '100' }];

const Pagination = ({ pagesAmount }) => {
  const dispatch = useDispatch();
  const amountElOnPage = useSelector(({ reduxState }) => reduxState.amount);

  const handleChangeAmountEl = (event) => {
    const parseValue = parseInt(event.target.value, 10);
    if (amountElOnPage !== parseValue) {
      dispatch(setAmountElOnPage(parseValue));
    }
  };
  return (
    <div className="pagination-container">
      <select className="dropdown-pagination-container" onChange={handleChangeAmountEl}>
        {PaginationConfigList.map(({ pageSize }) => (
          <option className="drop-pag-item" key={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
      <PaginationPages pagesAmount={pagesAmount} />
    </div>
  );
};

export default Pagination;
