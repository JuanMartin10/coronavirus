import React, { useState, useEffect } from 'react';
import DataList from './DataList';
import './App.css';

const App = () => {

  const [loading, setLoading] = useState(true);
  const [confirmed, setConfirmed] = useState(null);
  const [deaths, setDeaths] = useState(null);
  const [recovered, setRecovered] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://enrichman.github.io/covid19/world/full.json');
        const data = await response.json();
        console.log(data)
        setLoading(false);
        setDeaths(data.deaths);
        setConfirmed(data.confirmed);
        setRecovered(data.recovered);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);





  if (loading) {
    return (<div>Cargando datos..</div>)
  }
  return (
    <>
      <DataList
        deaths={deaths}
        confirmed={confirmed}
        recovered={recovered} />
    </>
  );
}



export default App;
