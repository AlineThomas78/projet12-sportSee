import calorie from "../../Asset/nutritionnelle/calorie.svg";
import { useFetch } from "../../Hooks/hooks";
import { FormatCalorieData } from "../../model/CaloriesData";
import currentUser from "../../utils/currentUser";

/**
A component that displays the user's calorie count.
@component
@return {JSX.Element} JSX.Element representation of the component.
*/
function Calorie() {
  const { data } = useFetch(`http://localhost:3000/user/${currentUser}`);
  const userCaloriesFormatted = new FormatCalorieData(data?.data);
//   console.log(userCaloriesFormatted)

  return (
    <div className="containerNutriments">
      <div className="svg">
        <img src={calorie} alt="img flamme" />
      </div>
      <div className="Vnutritionnelle">
        <p className="nutrientsCount"> {userCaloriesFormatted?.data?.keyData?.calorieCount}</p>
        <h5>calories</h5>
      </div>
    </div>
  );
}

export default Calorie;
