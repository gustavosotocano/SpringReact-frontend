import React,{Component} from "react"
import AuthenticationService from "./AuthenticationService.js"


class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handlerChange = this.handlerChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handlerChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked() {
        if (this.state.username === 'in28minutes' && this.state.password === 'dummy') {
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
            this.props.navigate(`/welcome/${this.state.username}`)
        }
        else {

            this.setState({ hasLoginFailed: true })
            this.setState({ showSuccessMessage: false })
        }
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="warning alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    {/*<ShowSuccessCredentials showSuccessMessage={this.state.showSuccessMessage}/>*/}

                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handlerChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handlerChange} />
                    <button className="btn btn-sucesss" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )

    }
}
export default LoginComponent