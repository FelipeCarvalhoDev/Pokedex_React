import { useEffect, useState } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import Card from './components/Card';

const api = 'https://pokeapi.co/api/v2/pokemon/'

function App(){
const [text, setText] = useState('');
const [info, setInfo] = useState({});

useEffect(() => {
  if (text) {
    fetch(`${api}${text}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response)
      })
  } else {
    fetch(`${api}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response)
      })
  }
}, [text]);

return (
    <div className="app">
      <Header />
      <Filter value={text} onChange={(search) => setText(search)}/>
      <Card data={info} />
    </div>
  );
}

export default App;
