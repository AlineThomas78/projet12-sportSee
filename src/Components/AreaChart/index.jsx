import { XAxis, Tooltip, Area, AreaChart, ResponsiveContainer } from "recharts";

/**
A component that displays a line chart of user's average session length for each day.
@component
@return {JSX.Element} A React JSX Element that displays a line chart.
*/
/**
Displays a line chart component using Recharts library to render user activity data.
@returns {JSX.Element} The line chart component with the user's session data.
*/
function AreaCharts({ userAreaFormatted }) {
  const customTooltipStyle = {
    backgroundColor: "white",
    color: "black",
    borderRadius: "4px",
    padding: "8px",
    fontSize: "14px",
    lineHeight: "1.4",
    height: "50px",
  };
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip" style={customTooltipStyle}>
          <p
            className="value"
            style={{ marginTop: "5px" }}
          >{`sessionLength: ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <div className="lineChart">
        <div className="containerShadow">
          <div className="shadow"></div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={userAreaFormatted?.data?.sessions}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey="day"
              tick={{ fill: "#FFFFFF", opacity: "0.5" }}
              stroke="red"
            />
            <Tooltip
              content={CustomTooltip}
              cursor={{
                stroke: "#FFFFFF",
                strokeWidth: 5,
                strokeOpacity: 0.2,
                fill: "#FFFFFF",
                fillOpacity: 0.2
              }}
            />
            <Area
              type="basis"
              dataKey="sessionLength"
              stroke="white"
              fill="red"
            />
            <text
              className="tArea"
              x={20}
              y={30}
              fill="white"
              fontSize={15}
              fontFamily="Roboto"
              fontWeight={500}
            >
              Durée moyenne des
            </text>
            <text
              className="tArea"
              x={20}
              y={50}
              fill="white"
              fontSize={15}
              fontFamily="Roboto"
              fontWeight={500}
            >
              sessions
            </text>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
export default AreaCharts;
