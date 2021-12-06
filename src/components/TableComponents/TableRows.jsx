import { React } from 'react';
import '../style.css';

const TableRows = ({ data, loading, columnsConfig }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {data.map((element) => (
        <div className="table-row" key={element.id}>
          {columnsConfig.map((column) => (
            <div className="table-row__cell" key={element[column.key]}>
              {element[column.key]}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export { TableRows };
