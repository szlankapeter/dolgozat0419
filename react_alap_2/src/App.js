import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Kerdesek from './pages/Kerdesek';
import Legorulo from './pages/Dorpdown';



function App() {

  let [tesztek, setTesztek] = useState([]);
  let [kateg, setKateg] = useState([]);

  useEffect(() => {
    async function getTesztek() {
      try {
        const response = await axios.get("http://localhost:8000/api/tesztek");
        setTesztek(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    async function getKateg() {
      try {
        const response = await axios.get("http://localhost:8000/api/kategoria");
        setKateg(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getKateg();
    getTesztek();
  }, []);

  console.log(kateg);


  return (
    <div className="App">

      <Legorulo kateg={kateg} />

      <div className='kerdesek'>
        <Kerdesek tesztek={tesztek} />
      </div>

    </div>
  );
}

export default App;
