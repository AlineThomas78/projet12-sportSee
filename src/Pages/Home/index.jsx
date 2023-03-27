/**
A page component for the Home page.
@function
@returns {JSX.Element} - The Home page component JSX.Element.
*/
import "./home.css";
import { useFetch } from "../../Hooks/hooks";
import Bart from "../../Components/BarChart";
import {BarChart,RadarChart,PieChart,AreaChart} from "recharts";
import Calorie from "../../Components/Nutritionelle/calorie";
import Proteine from "../../Components/Nutritionelle/proteine";
import Glucide from "../../Components/Nutritionelle/glucide";
import Lipide from "../../Components/Nutritionelle/lipide";
import AreaCharts from "../../Components/AreaChart/index.jsx";
import RadarCharts from "../../Components/RadarChart/index.jsx";
import PieCharts from "../../Components/RadialChart/index";

/**

A function component that renders a home page with user data and charts.
@function Home
@returns {JSX.Element} - Rendered component.
**/
function Home() {
  /*
Fetches user data from a server using the useFetch hook.
@name useFetch
@function
@param {string} url - The URL to fetch data from.
@returns {Object} - The data object containing the user's main data, average sessions, and performance, as well as any error or loading state.
*/
  const { data } = useFetch(`http://localhost:3000/user/12`);
 
  return (
    <>
      <div className="ContainerHome">
        <div className="Ctitle">
          <div>
            <h1 className="Title">
              Bonjour{" "}
              <span className="Sh1">{data?.data?.userInfos?.firstName}</span>
            </h1>
            <p className="Ptitle">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>
        </div>
        <div className="containerComposants">
          <div className="graph">
            <div className="barchart">
              <Bart data={data}>
                <BarChart data={data} />
              </Bart>
            </div>

            <div className="ContainerLineChart">
           
                <div className="lineChart">
                <p className="pArea">Durée moyenne des sessions</p>
                  <div className="containerShadow">
                 <div className="shadow"></div></div>
                    <AreaChart data={data} />
                      <AreaCharts data={data} />
                    <AreaChart />
                </div>

              <div className="ContainerRadar">
                <RadarChart data={data} />
                  <RadarCharts data={data} />
                <RadarChart />
              </div>
              <div className="ContainerPie">
              <p className="pPieChart">Score</p>
                <PieChart data={data} />
                  <PieCharts data={data} />
                <PieChart />
              </div>
            </div>
          </div>

          <div className="containerNutritionnelle">
            <div className="nutritionnelle">
              <Calorie />
            </div>

            <div className="nutritionnelle">
              <Proteine />
            </div>

            <div className="nutritionnelle">
              <Glucide />
            </div>

            <div className="nutritionnelle">
              <Lipide />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
