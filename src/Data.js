import React from 'react';

const Data = ({ deaths, confirmed, recovered }) => (
    <div>
        <div>Muertes: {deaths}</div>
        <div>Confirmados: {confirmed}</div>
        <div>Recuperados: {recovered}</div>
    </div>
)

export default Data