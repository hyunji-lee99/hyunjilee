import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GlobalStyle from './GlobalStyle';
import Home from './Home.jsx';
import Project from "./Project.jsx";
import Skills from './Skills';
import Contact from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Home />
    <Project/>
    <Skills/>
    <Contact/>
  </React.StrictMode>
);

