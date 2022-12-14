import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Question from './components/Question';
import TermosUso from './components/TermosUso';
import PoliticaPricacidade from './components/PoliticaPrivacidade';
import MenuBar from './components/MenuBar';
import BemEstar from './components/bemEstar';
import Vacinas from './components/vacinas';
import Linksuteis from './components/linksUteis';
import SobreEsteApp from './components/SobreEsteApp';
import InformacoesParaMedicos from './components/InformacoesParaMedicos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
     <header >
        <MenuBar></MenuBar>
      </header> 
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="question" element={<Question />} /> 
    <Route path="TermosUso" element={<TermosUso />} /> 
    <Route path="PoliticaPricacidade" element={<PoliticaPricacidade />} /> 
    <Route path="SobreEsteApp" element={<SobreEsteApp />} /> 
    <Route path="InformacoesParaMedicos" element={<InformacoesParaMedicos/>} /> 


    <Route path="bemEstar" element={<BemEstar />} /> 

    <Route path="vacinas" element={<Vacinas />} /> 

    <Route path="linksuteis" element={<Linksuteis />} /> 
  </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
