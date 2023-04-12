import { PieChart, ResponsiveContainer, Pie, Cell } from "recharts";
import PropTypes  from "prop-types";
/**
 * A component that displays a pie chart of user's score data.
 * @component
 * @return {JSX.Element} A pie chart of user's score data.
 */
function PieCharts({ userRadialFormatted }) {
  const isDesktop = window.screen.width >= 1400;
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
              outerRadius="85%"
            >
              <Cell key="cell-0" fill="red"   />
              <Cell key="cell-1" fill="none" />
            </Pie>
            <text
              x={30}
              y={30}
              fill="black"
              fontSize={15}
              fontFamily="Roboto"
              fontWeight={500}
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
              outerRadius="70%"
            >
              <Cell key="cell-0" fill="white" nameKey="name" dataKey="name" />
              <Cell key="cell-1" fill="white" nameKey="name" dataKey="value" />
            </Pie>
            <text
              x={isDesktop? 105 : 90 }
              y={isDesktop? 95: 80 }
              fill="black"
              fontSize={isDesktop? 26 : 22 }
              fontFamily="Roboto"
              fontWeight={700}
            >
              {userRadialFormatted?.data?.todayScore[0]?.value}%
            </text>
            <text
              x={isDesktop? 100 : 80}
              y={isDesktop? 125 : 105}
              fill="#74798C"
              fontSize={17}
              fontFamily="Roboto"
              fontWeight={500}
            >
              de votre
            </text>
            <text
              x={isDesktop? 100 : 80}
              y={isDesktop? 150 : 125}
              fill="#74798C"
              fontSize={17}
              fontFamily="Roboto"
              fontWeight={500}
            >
              objectif
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
    
  );
}
PieCharts.propTypes = {
  userRadialFormatted: PropTypes.shape({
    data: PropTypes.shape({
      todayScore: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.number,
      })),
    }),
  })
}

export default PieCharts;
