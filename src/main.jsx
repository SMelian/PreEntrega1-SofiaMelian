// import a from "A": trae una variable llamada a desde el archivo A.js
import React from 'react' //esto se hace para usar lo que esta en la linea 8 en adelante de este archivo
import ReactDOM from 'react-dom/client'
import App from './App.jsx' //este ./ significa que esta trayedo algo de esta ruta. a diferencia de las 2 lineas de arriva, que vienen de 2 librerias que vite instalo
import './index.scss' // se carga una hoja de estilo de css

ReactDOM.createRoot(document.getElementById('root')).render( // esto refiere a que en el index de html despues se exporta desde root.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
