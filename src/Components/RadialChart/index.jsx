import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

/**
 * A component that displays a pie chart of user's score data.
 * @component
 * @return {JSX.Element} A pie chart of user's score data.
 */
function PieCharts({ userRadialFormatted }) {
  return (
    <>
      <div className="ContainerPie">
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
            <text
              x={30}
              y={30}
              fill="black"
              fontSize={15}
              fontFamily="Roboto"
              fontWeight={"bold"}
            >
              Score
            </text>

            <Pie
              data={userRadialFormatted.data?.todayScore}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={60}
            >
              <Cell key="cell-0" fill="white" nameKey="name" dataKey="name" />
              <Cell key="cell-1" fill="white" nameKey="name" dataKey="value" />
            </Pie>
            <text 
              x={118}
              y={95}
              fill="black"
              fontSize={25}
              fontFamily="Roboto"
              fontWeight={"bold"}
            >
              12%
            </text>
            <text
              x={112}
              y={120}
              fill="#74798C"
              fontSize={15}
              fontFamily="Roboto"
              fontWeight={"bold"}
            >
              de votre
            </text>
            <text
              x={112}
              y={145}
              fill="#74798C"
              fontSize={15}
              fontFamily="Roboto"
              fontWeight={"bold"}
            >
              objectif
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default PieCharts;
