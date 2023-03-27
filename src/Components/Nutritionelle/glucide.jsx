import glucide from "../../Asset/nutritionnelle/glucide.svg";
import { useFetch } from "../../Hooks/hooks";
import { FormatGlucideData } from "../../model/Glucides.Data";

/**
React component that displays the user's carbohydrate intake.
@returns {JSX.Element} The JSX code that displays the carbohydrate intake.
*/
function Glucide() {
  const { data } = useFetch(`http://localhost:3000/user/12`);
  const userGlucideFormatted = new FormatGlucideData(data?.data);
  
  return (
    <div className="containerNutriments">
      <div className="svg">
        <img src={glucide} alt="img poulet" />
      </div>
      <div className="Vnutritionnelle">
        <p className="nutrientsCount">{userGlucideFormatted?.data?.keyData?.carbohydrateCount}</p>
        <h5>Glucide</h5>
      </div>
    </div>
  );
}
export default Glucide;
