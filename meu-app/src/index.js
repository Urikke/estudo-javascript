import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import App2 from './Components/App2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App2 title="Título">
      Conteúdo
    </App2>

    <App2 title="Título2">
      Conteúdo2
    </App2>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
