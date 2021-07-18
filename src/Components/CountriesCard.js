import "../style/CountriesCard.css";

function CountriesCard({ flag, name, population, region, capital }) {
  return (
    <div className='card-container'>
      <img src={flag} />
      <div className="caption-container">

      <p className="name">{name}</p>
      <div>{`Population: ${population}`}</div>

      <div>{`region: ${region}`}</div>
      <div>{`capital: ${capital}`}</div>
      </div>
    </div>
  );
}
export default CountriesCard;
