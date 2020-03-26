import React from 'react';
import { connect } from 'react-redux'
import DataList from '../UI/DataList'
import useCoronaVirusData from '../../hooks/useCoronaVirusData'


const Spain = ({ globalData }) => {

    const { data, loading } = useCoronaVirusData('/spain/data.json')

    if (loading) {
        return (<div>Cargando datos..</div>)
    }
    return (
        <div>
            <h1>Estadisticas en España</h1>
            <DataList deaths={data.deaths} confirmed={data.confirmed} recovered={data.recovered} />
            <h2>Estadisticas globales</h2>
            <DataList deaths={globalData.deaths} confirmed={globalData.confirmed} recovered={globalData.recovered} />
        </div>
    );
}

const mapStateToProps = state => {
    return { globalData: state }
}

export default connect(mapStateToProps)(Spain);


