import {RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer,} from "recharts";

/**
React component that displays a radar chart based on the user's performance data.
@returns {JSX.Element} The JSX code that displays the radar chart.
*/
function RadarCharts({userRadarFormatted}) {


  return (
    <div className="ContainerRadar">
      
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            outerRadius={60}
            width={258}
            height={263}
            data={userRadarFormatted?.data?.data}
          >
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              fill="white"
              stroke="white"
              fontSize={15}
            />
            <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.8} />
          </RadarChart>
        </ResponsiveContainer>
      
    </div>
  );
}

export default RadarCharts;
