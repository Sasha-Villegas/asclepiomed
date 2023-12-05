import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Obs from './components/ObrasSociales/Obs';
import Turnos from './components/Turnos/Turnos';
import Sucursales from './components/Sucursales/Sucursales';
import Contact from './components/Contact/Contact';
import Map from './components/Map/Map';

function App(){
    return(
      <div>
          <Navbar/>
          <Header/>
          <Obs/>
          <Sucursales/>
          <Map/>
          <Turnos/>
          <Contact/>
      </div>
    )
}

export default App;
