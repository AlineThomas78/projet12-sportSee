import { useFetch } from "../../Hooks/hooks";
import { providerMainDataFromAPI } from "../../utils/provider";


function Title() {

const {data} = useFetch(providerMainDataFromAPI);

    return(
        <div className="Ctitle">
        <div>
          <h1 className="Title">
            Bonjour{" "}
            <span className="Sh1"> {data?.data?.userInfos?.firstName}</span>
          </h1>
          <p className="Ptitle">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
      </div>
    )
}
export default Title;