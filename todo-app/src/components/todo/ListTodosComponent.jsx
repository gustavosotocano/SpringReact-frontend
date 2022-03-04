import React,{Component} from "react"
 
class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                    { id: 1, description: 'Learn to Dance', done: false, targetDate: new Date() },
                    { id: 2, description: 'Become an Expert at React', done: false, targetDate: new Date() },
                    { id: 3, description: 'Visit India', done: false, targetDate: new Date() }
                ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                 
                                <th>description</th>
                                <th>Is Complete</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr>
                                             
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
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