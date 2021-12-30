import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCities, getTotalAmount } from '../store/reducers/cities.reducer';
import { fetchCities } from '../store/actions/cities.actions';
import Card from '../components/Card/Card';
import Pagination from '../components/Table/PaginationComponents/Pagination';
import { DEFAULT_CURRENT_PAGE, DEFAULT_AMOUNT_EL } from '../components/Table/constants';

const Cards = () => {
  const cities = useSelector(getCities);
  const totalAmount = useSelector(getTotalAmount);

  const [currentPage, setCurrentPage] = useState(DEFAULT_CURRENT_PAGE);
  const [amountElOnPage, setAmountElOnPage] = useState(DEFAULT_AMOUNT_EL);

  const pagesAmount = Math.ceil(totalAmount / amountElOnPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCities(amountElOnPage, currentPage));
  }, [amountElOnPage, currentPage]);

  const handleChangeAmountEl = (event) => {
    const amount = parseInt(event.target.value, 10);

    if (amountElOnPage !== amount) {
      setAmountElOnPage(amount);
    }
  };

  return (
    <>
    <div className="cards-container">
      {cities.map(({ id, name, state_name }) => (
        <Card key={id} text={state_name} title={name} />
      ))}
    </div>
      <Pagination pagesAmount={pagesAmount} onPageChange={setCurrentPage} onChangeAmountEl={handleChangeAmountEl} />
    </>
  );
};

export default Cards;
