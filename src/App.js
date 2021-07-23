import { useEffect, useState } from 'react';
import './assets/scss/App.scss';
import Header from './components/Header';
import Filter from './components/Filter';
import Card from './components/Card';

const api = 'https://pokeapi.co/api/v2/pokemon/'

function App(){
const [name_id, setNameId] = useState('');
const [info, setInfo] = useState({});

useEffect(() => {
  if (name_id) {
    fetch(`${api}${name_id}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setInfo(response)
      })
  } else {
    fetch(`${api}`)
      .then((response) => response.json())
      .then((response) => {
          setInfo(response)
      })
  }
}, [name_id]);

return (
    <div className="app">
      <Header />
      <Filter value={name_id} onChange={(search) => setNameId(search)}/>
      <div className="results">
        {info.results &&
          info.results.map((pokemon) => (
            <Card key={pokemon.url} data={pokemon}/>
        ))}
        {info.forms && 
          info.forms.map((pokemon) => (
            <Card key={pokemon.url} data={pokemon.name}/>
        ))}      
      </div>
    </div>
  );
}

export default App;
