import lipide from '../../Asset/nutritionnelle/lipide.svg';
import { useFetch } from '../../Hooks/hooks';
import {FormatLipideData} from '../../model/LipidesData';

/**
React component that displays the user's lipid intake.
@returns {JSX.Element} The JSX code that displays the lipid intake.
*/
function Lipide() {
    const { data} = useFetch(`http://localhost:3000/user/12`);
    const userLipideFormatted = new FormatLipideData(data?.data);
    
    return(
        <div className="containerNutriments">
             <div className="svg">
                <img src={lipide} alt="img poulet" />
            </div>
            <div className="Vnutritionnelle">
            <p className="nutrientsCount">{userLipideFormatted?.data?.keyData?.lipidCount}</p>
                <h5>Lipides</h5>
            </div>
        </div>
    )
}
export default Lipide;