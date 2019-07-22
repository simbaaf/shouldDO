import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './todoList'

var destination =  document.getElementById('container');

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);
