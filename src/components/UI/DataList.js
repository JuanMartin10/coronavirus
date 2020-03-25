import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from './flexContainer'
import Data from './Data';

const DataList = ({ deaths, confirmed, recovered }) => (
    <FlexContainer>
        <Data title='Muertes' number={deaths} />
        <Data title='Confirmados' number={confirmed} />
        <Data title='Recuperados' number={recovered} />
    </FlexContainer>
)

DataList.propTypes = {
    deaths: PropTypes.number.isRequired,
    confirmed: PropTypes.number.isRequired,
    recovered: PropTypes.number.isRequired
}


export default DataList