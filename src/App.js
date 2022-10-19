import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Question from './components/Question';
import MenuBar from './components/MenuBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";


function App() {
  return (
   <Home></Home>
  );
}

export default App;
