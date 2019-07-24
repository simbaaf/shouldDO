import React, { Component } from 'react'
import TodoItems from './TodoItems'
import './TodoList.css'

 class todoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
         };

        this.addItem=this.addItem.bind(this)
        this.deleteItem= this.deleteItem.bind(this)
    }

    addItem(e) {
        if(this._inputELement.value !== "") {
            var newItem= {
                text: this._inputELement.value,
                key:Date.now()
            };
            this.setState((prevState) => {
                return {
                    items:prevState.items.concat(newItem)
                };
            });
        }
        //console.log(this.state.items)
        this._inputELement.value= "";
        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function(item){
            return(item.key !== key )
        });
        this.setState({
            items : filteredItems
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="title">Mytodo_List</h1>
                <div className="todoListMain">
                    <div className="header">    
                        <form onSubmit={ this.addItem }>
                            <input ref={(a) => this._inputELement= a }
                                placeholder="Enter tasks"></input>
                            <button  type="submit">Add Tasks</button>
                        </form>
                    </div>
                    <TodoItems entries={this.state.items}
                                delete={this.deleteItem}/> 
                   
                </div>
             </div>   
        )

    }
}

export default todoList