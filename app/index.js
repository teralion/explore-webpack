import React from 'react';
import ReactDOM from 'react-dom';
import css from 'app/index.css';

const HelloWorld = () =>
  <h1 className={css.elem}>Hello, world</h1>

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
