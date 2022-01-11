import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCities, getTotalAmount } from '../store/reducers/cities.reducer';
import { fetchCities } from '../store/actions/cities.actions';
import Card from '../components/Card/Card';
import Pagination from '../components/Pagination/Pagination';
import { DEFAULT_AMOUNT_EL } from '../constants/constants'
import { useLocation } from 'react-router-dom';

const Posts = () => {
  const dispatch = useDispatch();
  
  const cities = useSelector(getCities);
  const totalAmount = useSelector(getTotalAmount);

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const amount = searchParams.get('amount') || DEFAULT_AMOUNT_EL;
  const page = searchParams.get('page') || 1;
  
  const [currentPage, setCurrentPage] = useState(page);
  const [amountElOnPage, setAmountElOnPage] = useState(amount);
  
  const pagesAmount = Math.ceil(totalAmount / amountElOnPage);
  
  useEffect(() => {
    dispatch(fetchCities(amountElOnPage, currentPage));
  }, [amountElOnPage, currentPage]);

  const handleChangeAmountEl = (value) => {
    if (amountElOnPage !== value) {
      setAmountElOnPage(value);
    }
  };

  return (
    <>
    <div className="cards-container">
      {cities.map(({ id, name, state_name }) => (
        <Card key={id} text={state_name} title={name} />
      ))}
    </div>
      <Pagination 
        pagesAmount={pagesAmount} 
        searchParams={searchParams} 
        onPageChange={setCurrentPage} 
        onChangeAmountEl={handleChangeAmountEl} />
    </>
  );
};

export default Posts;
