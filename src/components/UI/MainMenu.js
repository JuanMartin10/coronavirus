import React from 'react';
import { Link } from 'react-router-dom'
import { home, spain, contact } from '../../conf/routes'
import PropTypes from 'prop-types'

const MainMenu = ({ onClickChangeThemeButton }) => (
    <nav>
        <ul>
            <li>
                <Link to={home()}>Home</Link>
            </li>
            <li>
                <Link to={spain()}>España</Link>
            </li>
            <li>
                <Link to={contact()}>Contacto</Link>
            </li>
            <li>
                <button onClick={onClickChangeThemeButton}>Cambiar color</button>
            </li>
        </ul>
    </nav>
);

MainMenu.propTypes = {
    onClickChangeThemeButton: PropTypes.func.isRequired
};

export default MainMenu