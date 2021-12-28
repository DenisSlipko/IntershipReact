import { React } from 'react';
import { useSelector } from 'react-redux';

import { getLoading } from '../../store/reducers/countries.reducer';
import Loader from '../loaders/Loader';

const TableRows = ({ data, columnsConfig, onClickRow }) => {
  const loading = useSelector(getLoading);

  return loading ? (
    <Loader />
  ) : (
    data.map((element) => (
      <div className="table-row" key={element.id} onClick={() => onClickRow(element, element.id)}>
        {columnsConfig.map(({ key }) => (
          <div className="table-row__cell" key={element[key]}>
            {element[key]}
          </div>
        ))}
      </div>
    ))
  );
};

export default TableRows;
