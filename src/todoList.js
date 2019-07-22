import React, { Component } from 'react'

 class todoList extends Component {
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form>
                        <input placeholder="Enter tasks"></input>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default todoList