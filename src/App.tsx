import data from "./utils/data.json"
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";
import "./App.css";
function App() {
  return (
    <div className="app-container">
      <h1>Crop Production Data</h1>
      <h2>Yearly Crop Production (Max and Min)</h2>
      <Table1 data={data} />
      <h2>Average Crop Data (1950-2020)</h2>
      <Table2 data={data} />
    </div>
  );
}

export default App;
