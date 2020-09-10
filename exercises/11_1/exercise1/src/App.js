import React from 'react';
import './App.css';

const task = ['Esquenta', 'Conteúdo', 'Aula ao Vivo', 'Exercício'];

function App() {
  return (
  <ul>{ task.map(task => <li>{task}</li>) }</ul>
  );
}

export default App;
