import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import './assets/scss/App.scss';
import Header from './components/Header';
import FilterId from './components/FilterId';
import FilterHabilidade from './components/FilterHabilidade';
import Card from './components/Card';


function App(){
const [api, setApi] = useState('https://pokeapi.co/api/v2/pokemon/')
const [info, setInfo] = useState({});
const [name_id, setNameId] = useState('');
const [name_habilidade, setNameHabilidade] = useState('');
const [nextUrl, setNext] = useState('');
const [prevUrl, setPrev] = useState('');

useEffect(() => {
  if (name_id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name_id}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response)
      })
  } else if (name_habilidade) {
    fetch(`https://pokeapi.co/api/v2/ability/${name_habilidade}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response)
      })
    } else {
    fetch(`${api}`)
      .then((response) => response.json())
      .then((response) => {
          setInfo(response)
          setNext(response.next)
          setPrev(response.previous)
      })
  }
}, [name_id, api, name_habilidade]);

return (
    <div className="app">
      <Header />
      <div className="filters">
      <FilterId value={name_id} onChange={(search) => setNameId(search)}/>
      <FilterHabilidade value={name_habilidade} onChange={(search) => setNameHabilidade(search)}/>
      </div>
      <nav>
        <Button variant="contained" onClick={() => setApi(prevUrl)} disabled={!prevUrl || name_id || name_habilidade}>Anteriores</Button>
        <Button variant="contained" onClick={() => setApi(nextUrl)} disabled={name_id || name_habilidade}>Próximos</Button>
      </nav>
      <div className="results">
        {info.results &&
          info.results.map((pokemon) => (
            <Card key={pokemon.url} data={pokemon}/>
        ))}
        {info.forms && 
          info.forms.map((pokemon) => (
            <Card key={pokemon.url} data={pokemon.name}/>
        ))}      
        {info.pokemon && 
          info.pokemon.map((pokemon, i) => (
            <Card key={i} data={pokemon.pokemon}/>
        ))}      
      </div>
    </div>
  );
}

export default App;
