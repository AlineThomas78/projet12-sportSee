import {PieChart,Pie,Cell,ResponsiveContainer} from "recharts";
import { useFetch } from "../../Hooks/hooks";
import { FormatRadialData } from "../../model/RadialData";
import { providerMainData } from "../../utils/provider";

/**
 * A component that displays a pie chart of user's score data.
 * @component
 * @return {JSX.Element} A pie chart of user's score data.
 */
function PieCharts() {
/**
A custom hook that uses the fetch API to retrieve data from a specified URL.
@function useFetch
@param {string} url - The URL to fetch data from.
@returns {object} An object containing the fetched data and an error state.
The data property contains the fetched data or null if the fetch was unsuccessful.
*/
  // const { data } = useFetch(`http://localhost:3000/user/12`);
/**
A custom hook that returns test data from a mock provider.
@function useFetch
@param {object} providerData - The provider data to be used as the source of test data.
@returns {object} An object containing the test data and an error state.
The data property contains the test data or null if the provider data was invalid.
*/
  const {data} = useFetch(providerMainData);
/**
A class that formats data for a radial chart.
@class FormatRadialData
@param {object} data - The data to be formatted.
@property {object} data - The formatted data.
*/
  const userRadialFormatted = new FormatRadialData(data?.data);
  
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={userRadialFormatted.data?.todayScore}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={70}
          >
            <Cell key="cell-0" fill="red" />
            <Cell key="cell-1" fill="none" />
          </Pie>

          <Pie
              data={userRadialFormatted.data?.todayScore}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={60}
          >
              <Cell key="cell-0" fill="white" nameKey="name" dataKey="name"  />
              <Cell key="cell-1" fill="white" nameKey="name" dataKey="value" />

          </Pie>
        </PieChart>
      </ResponsiveContainer>
      
      <div className="score">
        <span className="span1">12%</span>
        <span className="span2">de votre objectif</span>
      </div>
      
    </>
  );
}

export default PieCharts;
