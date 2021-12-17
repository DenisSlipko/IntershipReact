import { React } from 'react';

const TableRows = ({ data, columnsConfig, onShowModal }) => {
  return data.map((element) => (
    <div className="table-row" key={element.id} onClick={() => onShowModal(element)}>
      {columnsConfig.map(({ key }) => (
        <div className="table-row__cell" key={element[key]}>
          {element[key]}
        </div>
      ))}
    </div>
  ));
};

export default TableRows;
