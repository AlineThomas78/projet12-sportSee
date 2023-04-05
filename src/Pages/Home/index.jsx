import "./home.css";
import { useFetch } from "../../Hooks/hooks";

import PieCharts from "../../Components/RadialChart/index";

import {
  providerActivityFromAPI,
  providerAverageSessionsFromAPI,
  providerPerformanceFromAPI,
  providerMainDataFromAPI,
} from "../../utils/provider";

import Title from "../../Components/Title/title";

import { FormatActivityData } from "../../model/FormatActivityData";
import Bart from "../../Components/Bart";

import { FormatRadarData } from "../../model/FormatRadarData";
import RadarCharts from "../../Components/RadarChart/index.jsx";

import AreaCharts from "../../Components/AreaChart/index.jsx";
import { FormatAreaChartData } from "../../model/FormatAreaChartData";

import Nutritionelle from "../../Components/Nutritionelle/nutritionelle";
import { FormatRadialData } from "../../model/FormatRadialData";

import calorie from "../../Asset/nutritionnelle/calorie.svg";
import proteine from "../../Asset/nutritionnelle/proteine.svg";
import glucide from "../../Asset/nutritionnelle/glucide.svg";
import lipide from "../../Asset/nutritionnelle/lipide.svg";

import { FormatCalorieData } from "../../model/FormatCalorieData";
import { FormatProteineData } from "../../model/FormatProteineData";
import { FormatGlucideData } from "../../model/FormatGlucideData";
import { FormatLipideData } from "../../model/FormatLipideData";

import PropTypes from 'prop-types';

/**
A function component that renders a home page with user data and charts.
@function Home
@returns {JSX.Element} - Rendered component.
**/
function Home() {
  const performance = useFetch(providerPerformanceFromAPI);
  const userRadarFormatted = new FormatRadarData(performance?.data?.data);

  const activity = useFetch(providerActivityFromAPI);
  const userBartFormatted = new FormatActivityData(activity.data?.data);

  const sessions = useFetch(providerAverageSessionsFromAPI);
  const userAreaFormatted = new FormatAreaChartData(sessions?.data?.data);

  const main = useFetch(providerMainDataFromAPI);
  const userRadialFormatted = new FormatRadialData(main?.data?.data);

  const calories = new FormatCalorieData(main?.data?.data);
  const proteines = new FormatProteineData(main?.data?.data);
  const glucides = new FormatGlucideData(main?.data?.data);
  const lipides = new FormatLipideData(main?.data?.data);

  // console.log(lipides);
  return (
    <>
      <div className="ContainerHome">
        <Title />
        <div className="containerComposants">
          <div className="graph">
            <div className="barchart">
              <Bart userBartFormatted={userBartFormatted} />
            </div>
            <div className="ContainerLineChart">
              <AreaCharts userAreaFormatted={userAreaFormatted} />
              <RadarCharts userRadarFormatted={userRadarFormatted} />
              <PieCharts userRadialFormatted={userRadialFormatted} />
            </div>
          </div>

          <div className="containerNutritionnelle">
            <div className="nutritionnelle">
              <Nutritionelle
                img={calorie}
                title="Calories"
                data={calories?.data?.keyData?.calorieCount}
              />
            </div>

            <div className="nutritionnelle">
              <Nutritionelle
                img={proteine}
                title="Proteines"
                data={proteines?.data?.keyData?.proteinCount}
              />
            </div>

            <div className="nutritionnelle">
              <Nutritionelle
                img={glucide}
                title="Glucides"
                data={glucides?.data?.keyData?.carbohydrateCount}
              />
            </div>

            <div className="nutritionnelle">
              <Nutritionelle
                img={lipide}
                title="Lipides"
                data={lipides?.data?.keyData?.lipidCount}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Home.propTypes = {
  // propTypes pour les différents composants utilisés
  Bart: PropTypes.shape({
    userBartFormatted: PropTypes.object.isRequired,
  }).isRequired,
  AreaCharts: PropTypes.shape({
    userAreaFormatted: PropTypes.object.isRequired,
  }).isRequired,
  RadarCharts: PropTypes.shape({
    userRadarFormatted: PropTypes.object.isRequired,
  }).isRequired,
  PieCharts: PropTypes.shape({
    userRadialFormatted: PropTypes.object.isRequired,
  }).isRequired,
  Nutritionelle: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.number.isRequired,
  }).isRequired,
};

export default Home;
