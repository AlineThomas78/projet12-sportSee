import {BarChart, Bar, XAxis,YAxis,ResponsiveContainer,Tooltip, Legend,} from "recharts";
  
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
    height:"80px",
    
  };
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip" style={customTooltipStyle}>
          <p className="value" style={{ marginTop: "5px" }}>{`Calories: ${payload[1].value}`}</p>
          <p className="value"  style={{ marginTop: "15px" }}>{`Kilogram: ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={userBartFormatted?.data?.sessions} >
          
          <XAxis dataKey="day" stroke="black"  />
          <YAxis orientation="right" dataKey="calories"  domain={[0, 'auto']}/>
          <Tooltip content={CustomTooltip} />
          <Legend verticalAlign="top" height={36} iconType="circle"  wrapperStyle={{ marginTop: 20 }} />
          <Bar dataKey="kilogram" fill='#282D30' barSize={15} radius={8} />
          <Bar dataKey="calories" fill="red" barSize={15} radius={8}  />
          <text
            x={120}
            y={55}
            fill="black"
            fontSize={20}
            fontFamily="Roboto"
            fontWeight={600}
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
          margin-left:300px
        }
      `}</style>
    </>
  );
}

export default Bart;
