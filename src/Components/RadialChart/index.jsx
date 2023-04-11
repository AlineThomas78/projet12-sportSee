import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

/**
 * A component that displays a pie chart of user's score data.
 * @component
 * @return {JSX.Element} A pie chart of user's score data.
 */
function PieCharts({ userRadialFormatted }) {
  return (
    // <>
    //   <div className="ContainerPie">
    //     <ResponsiveContainer width="100%" height="100%">
    //       <PieChart>
    //         <Pie
    //           data={userRadialFormatted.data?.todayScore}
    //           dataKey="value"
    //           nameKey="name"
    //           cx="50%"
    //           cy="50%"
    //           innerRadius={60}
    //           outerRadius="90%"
    //         >
    //           <Cell key="cell-0" fill="red" />
    //           <Cell key="cell-1" fill="none" />
    //         </Pie>
    //         <text
    //           x={30}
    //           y={30}
    //           fill="black"
    //           fontSize={15}
    //           fontFamily="Roboto"
    //           fontWeight={500}
    //         >
    //           Score
    //         </text>

    //         <Pie
    //           data={userRadialFormatted.data?.todayScore}
    //           dataKey="value"
    //           nameKey="name"
    //           cx="50%"
    //           cy="50%"
    //           innerRadius={0}
    //           outerRadius="70%"
    //         >
    //           <Cell key="cell-0" fill="white" nameKey="name" dataKey="name" />
    //           <Cell key="cell-1" fill="white" nameKey="name" dataKey="value" />
    //         </Pie>
    //         <text
    //           x={115}
    //           y={75}
    //           fill="black"
    //           fontSize={25}
    //           fontFamily="Roboto"
    //           fontWeight={700}
    //         >
    //           {userRadialFormatted?.data?.todayScore[0]?.value}%
    //         </text>
    //         <text
    //           x={110}
    //           y={100}
    //           fill="#74798C"
    //           fontSize={15}
    //           fontFamily="Roboto"
    //           fontWeight={500}
    //         >
    //           de votre
    //         </text>
    //         <text
    //           x={110}
    //           y={120}
    //           fill="#74798C"
    //           fontSize={15}
    //           fontFamily="Roboto"
    //           fontWeight={500}
    //         >
    //           objectif
    //         </text>
    //       </PieChart>
    //     </ResponsiveContainer>
    //   </div>
    // </>
    <div className="ContainerPie">
            <h3>Score</h3>
            <p className="score-chart__percentage"><span className="percentage--number">{userRadialFormatted?.data?.todayScore[0]?.value}%</span><br/>de votre<br/>objectif</p>

            <RadialBarChart width={260} height={250} innerRadius="70%" outerRadius="80%" data={userRadialFormatted.data?.todayScore} startAngle={180} endAngle={-180} >
                <RadialBar 
                   dataKey="value"
                   nameKey="name"
                    cornerRadius={30 / 2}
                    fill="#FF0101"
                />
                <PolarAngleAxis 
                    type="number" 
                    domain={[0, 100]} 
                    tick={false} 
                />
            </RadialBarChart>
        </div>
  );
}

export default PieCharts;
