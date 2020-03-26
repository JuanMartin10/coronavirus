import React from 'react';
import DataList from '../UI/DataList'
import useCoronaVirusData from '../../hooks/useCoronaVirusData'
import { useDispatch } from 'react-redux'
import { SET_GLOBAL_DATA } from '../../reducer'

const Home = () => {

  const { data, loading } = useCoronaVirusData('/full.json')
  const dispatch = useDispatch();

  if (loading) {
    return (<div>Cargando datos..</div>)
  }

  dispatch({
    type: SET_GLOBAL_DATA,
    data: {
      confirmed: data.confirmed,
      deaths: data.deaths,
      recovered: data.recovered
    }
  })

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
