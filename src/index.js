import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Fake socket comments
function emitSocketComments(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung comment của lesson ${id} `
      })

    )
  }, 2000)
}

emitSocketComments(1)
emitSocketComments(2)
emitSocketComments(3)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


