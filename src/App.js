import React, {Fragment, useState, useEffect} from 'react';
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import ListadoNoticias from './Components/ListadoNoticias'

function App() {

  const [categoria, actualizarCategoria] = useState('')
  const [noticias, guardarNoticias] = useState([])

  useEffect(() => {
      const consultarAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=0b9ca77e6ea04e29bfa638340c4b1cea`
        const respuesta = await fetch(url);
        const noticias = await respuesta.json()

        guardarNoticias(noticias.articles)
      }
      consultarAPI()
  }, [categoria])

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />

      <div className="container white">
        <Formulario actualizarCategoria={actualizarCategoria}/>
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
