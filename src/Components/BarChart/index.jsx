import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend} from "recharts";
import { useFetch } from "../../Hooks/hooks";
import { FormatActivityData } from "../../model/FormatData";
import { providerActivity } from "../../utils/provider";

/**
A bar chart component that displays a user's activity data using Recharts.
@component
@return {JSX.Element} A bar chart component.
*/
 function  Bart() {
// Fetch user activity data from server
    // const {data} = useFetch(`http://localhost:3000/user/12/activity`);
    const {data} = useFetch(providerActivity);
    
    // console.log(data)
// Format user activity data for display in the bar chart 
  const userActivityFormatted = new FormatActivityData(data?.data)
  // console.log(userActivityFormatted);
return(
  <>
    <p className="pBarchart">Activité quotidienne</p>
    <ResponsiveContainer  width="100%" height="100%" >
        <BarChart width={835} height={320}  data={userActivityFormatted?.data?.sessions} >
            <XAxis dataKey="day" stroke= "black" />
            <YAxis orientation="right" dataKey="calories" />
            <Tooltip />
            <Legend verticalAlign="top" height={36} iconType="circle" />
            <Bar  dataKey="kilogram" fill="#black"   barSize={15} radius={8}/>
            <Bar   dataKey="calories" fill="red"  barSize={15} radius={8}/>
        </BarChart>
    </ResponsiveContainer>
  </>
);
}
export default Bart;
