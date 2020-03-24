import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import Spain from './Spain';
import ThemeContext from './ThemeContext';
import './App.css';
import { darkTheme, lightTheme } from './styles/theme'

const MainContainer = styled.div`
background-color: ${props => props.theme.backgroundColor}
`

export default function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleChangeTheme = () => {
        setIsDarkTheme(oldValue => !oldValue)
    }


    const currentTheme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={currentTheme}>
            <MainContainer theme={currentTheme}>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/spain">España</Link>
                                </li>
                                <li>
                                    <button onClick={handleChangeTheme}>Cambiar color</button>
                                </li>

                            </ul>
                        </nav>

                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/spain">
                                <Spain />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </MainContainer>
        </ThemeContext.Provider>
    );
}

