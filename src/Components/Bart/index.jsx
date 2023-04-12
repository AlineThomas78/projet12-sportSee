import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import PropTypes from 'prop-types';

/**
A bar chart component that displays a user's activity data using Recharts.
@component
@return {JSX.Element} A bar chart component.
*/
function Bart({ userBartFormatted }) {
  const customTooltipStyle = {
    backgroundColor: "red",
    color: "white",
    borderRadius: "4px",
    padding: "8px",
    fontSize: "14px",
    lineHeight: "1.4",
    height: "80px",
  };
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip" style={customTooltipStyle}>
          <p
            className="value"
            style={{ marginTop: "5px" }}
          >{`Calories: ${payload[1].value}kCal `}</p>
          <p
            className="value"
            style={{ marginTop: "15px" }}
          >{`Kilogram: ${payload[0].value}g`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={userBartFormatted?.data?.sessions}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            padding={{ right: 20 }}
            tickMargin={15}
          />
          <YAxis
            dataKey="calories"
            orientation={"right"}
            tickLine={false}
            axisLine={false}
            minTickGap={60}
          />
          <Tooltip content={CustomTooltip} />
          <Legend
            width={350}
            iconType="circle"
            iconSize={7}
            wrapperStyle={{ top: 0, right: 150,  lineHeight: "20px" }}
            formatter={(value) => (
              <span className="legend-format">{value}</span>
            )}
          />
          <Bar
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#282D30"
            barSize={7}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            name="Calories brûlées (Cal)"
            fill="#FF0101"
            barSize={7}
            radius={[10, 10, 0, 0]}
          />
          <text
            x={40}
            y={40}
            fill="#20253A"
            fontSize={15}
            fontFamily="Roboto"
            fontWeight={500}
          >
            Activité quotidienne
          </text>
        </BarChart>
      </ResponsiveContainer>
      <style>{`
        .recharts-tooltip-wrapper {
          border: none;
          outline: none;
          box-shadow: none;
          font-family: Roboto;
        }
        .recharts-legend-wrapper{
          font-family: Roboto;
          color:#74798C;
          font-size:14px
        }
      `}</style>
    </>
  );
}

Bart.propTypes = {
  userBartFormatted: PropTypes.shape({
    data: PropTypes.shape({
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.string,
          calories: PropTypes.number,
          kilogram: PropTypes.number,
        })
      ),
    }),
  })
};

export default Bart;
