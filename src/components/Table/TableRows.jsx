import { React } from 'react';

const TableRows = ({ data, columnsConfig }) =>
  data.map((element) => (
    <div className="table-row" key={element.id}>
      {columnsConfig.map(({ key }) => (
        <div className="table-row__cell" key={element[key]}>
          {element[key]}
        </div>
      ))}
    </div>
  ));

export default TableRows;
