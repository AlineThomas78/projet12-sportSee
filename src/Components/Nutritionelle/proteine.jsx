import proteine from "../../Asset/nutritionnelle/proteine.svg";
import { useFetch } from "../../Hooks/hooks";
import { FormatProteineData } from "../../model/ProteineData";

/**
React component that displays the user's protein intake.
@returns {JSX.Element} The JSX code that displays the protein intake.
*/
function Proteine() {
  const { data} = useFetch(`http://localhost:3000/user/12`);
  const userProteineFormatted = new FormatProteineData(data?.data);
  
  return (
    <div className="containerNutriments">
      <div className="svg">
        <img src={proteine} alt="img poulet" />
      </div>
      <div className="Vnutritionnelle">
        <p className="nutrientsCount">{userProteineFormatted?.data?.keyData?.proteinCount}</p>
        <h5>Proteines</h5>
      </div>
    </div>
  );
}
export default Proteine;
