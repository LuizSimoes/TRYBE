import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
/*ReactDOM oferece um método simples para renderizar elementos React para o DOM que se parece com este:
, em ReactDOM.render(componentToRender, targetNode)que o primeiro argumento é o elemento ou componente 
React que você deseja renderizar e o segundo argumento é o nó DOM para o qual deseja renderizar o componente
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
