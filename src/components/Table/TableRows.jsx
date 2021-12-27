import { React } from 'react';
import { useSelector } from 'react-redux';

import { getLoading } from '../../store/reducers/countries.reducer';

const TableRows = ({ data, columnsConfig, onClickRow }) => {
  const loading = useSelector(getLoading);

  return loading ? (
    <div className="loader"></div>
  ) : (
    data.map((element) => (
      <div className="table-row" key={element.id} onClick={() => onClickRow(element)}>
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
