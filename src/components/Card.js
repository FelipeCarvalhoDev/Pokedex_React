
import './../assets/scss/Card.scss';
import { useEffect, useState } from 'react';
import Divider from '@material-ui/core/Divider';

const api = 'https://pokeapi.co/api/v2/pokemon/'

function Card({data}) {
const [infoPoke, setInfo] = useState({});

useEffect(() => {  
  if(data.url){
    fetch(`${data.url}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response)
      })
  } else {
    fetch(`${api}${data}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response)
      })
  }
}, []);

  return (
    <div className="card">
      
      <img src={infoPoke.sprites?.front_default} alt="" />
      <p className="name">{infoPoke.id} - {data.name ? data.name : data}</p>
      <Divider />
      <p>
        <b>Tipo:</b><br />
      <span>|</span>
      {infoPoke.types && 
        infoPoke.types.map((type) => (
          <span key={type.slot}> {type.type.name} |</span>
        ))
      }
      </p>
      <Divider />
      <p>
        <b>Habilidades:</b><br />
      <span>|</span>
      {infoPoke.abilities && 
        infoPoke.abilities.map((ability) => (
          <span key={ability.slot}> {ability.ability.name} |</span>
        ))
      }
      </p>
    </div>
  );
}

export default Card;