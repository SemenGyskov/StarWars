import './App.css';
import People from './components/People';
import Starships from './components/Starships';
import Planets from './components/Planets';
import Loader from './components/UI/loader/Loader'
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import Films from './components/Films';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Species from './components/Species';
import Transport from './components/Transport';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <div>
        <nav className="nav_bar">
              <MyButton><Link to="/planets">Планеты</Link></MyButton>
              <MyButton><Link to="/starships">Космические корабли</Link></MyButton>
              <MyButton><Link to="/people">Персонажи</Link></MyButton>
              <MyButton><Link to="/film">Фильмы</Link></MyButton>
              <MyButton><Link to="/species">Расы</Link></MyButton>
              <MyButton><Link to="/transport">Транспорт</Link></MyButton>
        </nav>

        <Routes>
          <Route path="/planets" element={<Planets />}/>
          <Route path="/starships" element={<Starships />}/>
          <Route path="/people" element={<People />}/>
          <Route path='/film' element={<Films />}/>
          <Route path='/species' element={<Species />}/>
          <Route path='/transport' element={<Transport />}/>
        </Routes>
        <Loader/>
      </div>
    </BrowserRouter>
      {/* <Loader/>
      <div>
        <MyButton>Удалить</MyButton>
      </div>
      <MyInput placeholder="Название"/> */}

      {/* <Planets/>
      <Starships/>
      <Nav /> */}
    </div>
  );
  
}

export default App;
