import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import TodoList from './components/TodoList'

var destination =  document.getElementById('container');

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);
