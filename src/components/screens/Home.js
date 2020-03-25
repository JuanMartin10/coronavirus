import React from 'react';
import DataList from '../UI/DataList'
import useFetch from '../../hooks/useFetch'

const Home = () => {

  const { data, loading } = useFetch('https://enrichman.github.io/covid19/world/full.json')


  if (loading) {
    return (<div>Cargando datos..</div>)
  }
  return (
    <>
      <DataList
        deaths={data.deaths}
        confirmed={data.confirmed}
        recovered={data.recovered} />
    </>
  );
}



export default Home;
