import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { home, spain, contact } from './conf/routes'
import ThemeContext from './context/ThemeContext';
import './App.css';
import { darkTheme, lightTheme } from './styles/theme'
import MainMenu from './components/UI/MainMenu'

const Home = lazy(() => import('./components/screens/Home'));
const Spain = lazy(() => import('./components/screens/Spain'));
const Contact = lazy(() => import('./components/screens/Contact'));



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
                    <Suspense fallback={<div>Cargando..</div>}>
                        <div>
                            <MainMenu onClickChangeThemeButton={handleChangeTheme} />
                            <Switch>
                                <Route exact path={home()}>
                                    <Home />
                                </Route>
                                <Route path={spain()}>
                                    <Spain />
                                </Route>
                                <Route path={contact()}>
                                    <Contact />
                                </Route>
                            </Switch>
                        </div>
                    </Suspense>
                </Router>
            </MainContainer>
        </ThemeContext.Provider>
    );
}

