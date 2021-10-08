import React from 'react';
import './App.css';
import {Main} from "./main/Main";
import {Header} from "./header/Header";
import {Routes} from "./routes/Routes";
import { HashRouter } from 'react-router-dom';

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Main/>
                <Routes/>
            </HashRouter>
        </div>
    );

};

export default App;
