import './App.css';
//importamos los componentes para las rutas de la app
import { Route, Routes } from 'react-router-dom';
//import { Routes, Route } from 'react-router-dom';
import Formulario from './Componentes/Formulario';
import Navegacion from './Componentes/Navegacion';
import Home from './Componentes/Home';
import Clientes from './Componentes/Clientes';

function App() {
  return (
    <>
      <Navegacion />
        
        <Routes>
          <Route index element = { <Home />} /> 
          <Route exact path= '/formulario'element={<Formulario/>} />
          <Route exact path= '/clientes'element={<Clientes/>} />
        </Routes>
        </>
  );
}

export default App;
