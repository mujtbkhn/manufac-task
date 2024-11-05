import React from "react";
import "./Table.css";
import { CustomTableProps } from "../utils/types";
import useTable2 from "../utils/hooks/useTable2";

const Table2: React.FC<CustomTableProps> = ({ data }) => {
  // Use custom hook to get table data
  const tableData = useTable2(data);

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Crop</th>
            <th>Average Yield of the Crop between 1950-2020 (Kg/Ha)</th>
            <th>Average Cultivation Area of the Crop between 1950-2020 (Ha)</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.crop}</td>
              <td>{item.avgYield}</td>
              <td>{item.avgArea}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
