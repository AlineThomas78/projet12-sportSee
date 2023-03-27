import { XAxis, Tooltip, Area,  AreaChart, ResponsiveContainer} from "recharts";
import { useFetch } from "../../Hooks/hooks";
import { AreaChartData } from "../../model/AreaChart";
import { providerAverageSessions } from "../../utils/provider";
// import { providerAverageSessionsFromAPI } from "../../utils/provider";
/**
A component that displays a line chart of user's average session length for each day.
@component
@return {JSX.Element} A React JSX Element that displays a line chart.
*/
/**
Displays a line chart component using Recharts library to render user activity data.
@returns {JSX.Element} The line chart component with the user's session data.
*/
function AreaCharts(){
// Fetches user activity data from the API.
    // const {data} = useFetch(providerAverageSessionsFromAPI);
// Fetch user activity data from Mock //
    const {data} = useFetch(providerAverageSessions);
    // console.log("hey",data)
// Formats the user activity data for rendering on the line chart.
    const userActivityFormatted = new AreaChartData(data?.data)
//   console.log(userActivityFormatted);

    return(
    <>
        <ResponsiveContainer  width="100%" height="100%">
            <AreaChart width={258} height={263} data={userActivityFormatted?.data?.sessions} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} > 
                <XAxis dataKey="day" tick = {{stroke:"#FFFFFF"}} stroke="red"  />
                <Tooltip />
                <Area type="basis" dataKey="sessionLength" stroke="white" fill="red" />
            </AreaChart>
        </ResponsiveContainer>

    </>
    )
}
export default AreaCharts;