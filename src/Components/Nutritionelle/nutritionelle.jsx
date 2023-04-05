import PropTypes from 'prop-types';

function Nutritionelle({ title, data, img }) {
  return (
    <div className="containerNutriments">
      <div className="svg">
        <img src={img} alt="img flamme" />
      </div>
      <div className="Vnutritionnelle">
        <p className="nutrientsCount"> {data}</p>
        <h5>{title}</h5>
      </div>
    </div>
  );
}

Nutritionelle.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default Nutritionelle;
