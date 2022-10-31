import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import Telo from './Component/Telo';
import Oagenciji from './Component/Оagenciji';
import Usluge from './Component/Usluge';
import Kalkulator from './Component/Kalkulator';
import Kontakt from './Component/Kontakt';


function App() {
  return (
    <div className="App">
      <Header />  
      <Routes>
        <Route path='' element={ <Telo />} /> 
        <Route path='/agencija' element={ <Oagenciji />} />
        <Route path='/Usluge' element={ <Usluge />} />      
        <Route path='/Kalkulator' element={ <Kalkulator />} /> 
        <Route path='/Kontakt' element={ <Kontakt />} /> 
      </Routes>
    </div>
  );
}

export default App;
