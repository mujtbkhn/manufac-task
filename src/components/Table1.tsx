import React from "react";
import "./Table.css";
import { CustomTableProps } from "../utils/types";
import useTable1 from "../utils/hooks/useTable1";

const Table1: React.FC<CustomTableProps> = ({ data }) => {
  // Use custom hook to get table data
  const tableData = useTable1(data);

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Crop with Maximum Production in that Year</th>
            <th>Crop with Minimum Production in that Year</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.year.split(",")[1]}</td>
              <td>{item.maxCrop}</td>
              <td>{item.minCrop}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table1;
