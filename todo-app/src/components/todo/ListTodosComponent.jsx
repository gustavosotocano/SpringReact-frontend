import React, { Component } from "react"
import TodoDataService from "../../api/todo/TodoDataService.js"
import AuthenticationService from './AuthenticationService.js'

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshtodos = this.refreshtodos.bind(this)
    }
    componentDidMount() {
        this.refreshtodos();
    }


    refreshtodos() {
        let name = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(name)
            .then(response => {
                this.setState({ todos: response.data })
            })

    }
    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        console.log(username + ' ' + id)
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState({message: `Delete of todo ${id} successful`})
                    this.refreshtodos()
            })
    }
    updateTodoClicked(id) {
        console.log('update '+id)
        this.props.navigate(`/todos/${id}`)
      //  let username = AuthenticationService.getLoggedInUserName()
      //  console.log(username + ' ' + id)
      //  TodoDataService.deleteTodo(username, id)
      //      .then(
      //          response => {
      //              this.setState({message: `Delete of todo ${id} successful`})
      //              this.refreshtodos()
      //      })
    }
    render() {
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>

                                <th>description</th>
                                <th>Is Complete</th>
                                <th>Target Date</th>
                                <th>Update</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>

                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}
export default ListTodosComponent