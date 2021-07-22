
import './../assets/scss/Card.scss';

function Card({data}) {
  
  return (
    <div className="card">
        {data.results && (
        <ul>
          {data.results.map((pokemon) => (
            <li key={pokemon.url}>
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}
      {data.forms && (
        <ul>
          {data.forms.map((pokemon) => (
            <li key={pokemon.url}>
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Card;