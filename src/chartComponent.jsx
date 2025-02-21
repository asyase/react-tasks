import { Chart } from "react-google-charts";

const data = [
  ["Category", "Value"],
  ["Fruits", 10],
  ["Vegetables", 5],
  ["Meat", 7],
  ["Dairy products", 3],
];

const options = {
  title: "Distribution of products",
  pieHole: 0.4, 
  is3D: false,  
};

function ChartComponent() {
  return (
    <div>
      <h2>Diagram</h2>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default ChartComponent;
