import { RadarChart, PolarGrid, PolarAngleAxis,  Radar,  ResponsiveContainer } from "recharts";
import { useFetch } from "../../Hooks/hooks";
import { FormatRadar } from "../../model/RadarData";
import { providerPerformance } from "../../utils/provider";

/**
React component that displays a radar chart based on the user's performance data.
@returns {JSX.Element} The JSX code that displays the radar chart.
*/
function RadarCharts() {
/*
The user's performance data retrieved from the server.
@type {Object}
*/
  // const { data } = useFetch(`http://localhost:3000/user/12/performance`);
  //Fetch data performance from Mock //
  const {data} = useFetch(providerPerformance);
/**
The user's performance data formatted for the radar chart.
@type {Object}
*/
  const userRadarFormatted = new FormatRadar(data?.data)
  // console.log(userRadarFormatted);
  // console.log(data)

  
  return (
    <ResponsiveContainer  width="100%" height="100%">
      <RadarChart outerRadius={70} width={258} height={263} data={userRadarFormatted?.data?.data} >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind"  fill="white" stroke="white"   fontSize={18} />
        <Radar  
          dataKey="value"
          stroke="red"
          fill="red"
          fillOpacity={0.8}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default RadarCharts;
