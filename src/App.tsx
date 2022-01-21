import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact /Contact";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
