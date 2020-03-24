import React from 'react';
import DataList from './DataList';
import useFetch from './hooks/useFetch';

const Spain = () => {

    const { data, loading } = useFetch('https://enrichman.github.io/covid19/world/spain/data.json')

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



export default Spain;
