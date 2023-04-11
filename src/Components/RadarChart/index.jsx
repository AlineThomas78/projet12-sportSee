import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Text
} from "recharts";

/**
React component that displays a radar chart based on the user's performance data.
@returns {JSX.Element} The JSX code that displays the radar chart.
*/
function RadarCharts({ userRadarFormatted }) {
  function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
    return (
      <Text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 5}
        x={x + (x - cx) / 50}
      >
        {payload.value}
      </Text>
    );
  }
const isDesktop = window.screen.width >= 1400;

  return (
    <div className="ContainerRadar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={isDesktop? "50%" : "40%"}
          data={userRadarFormatted?.data?.data}
          cx="50%"
          cy="50%"
        >
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            fontSize={isDesktop ? 15 : 14}
            tick={(props) => renderPolarAngleAxis(props)}
            tickLine={false} // Supprime le trait qui pointe vers le texte
          />

          <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.8} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarCharts;
