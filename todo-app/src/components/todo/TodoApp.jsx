import React, { Component } from "react"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import withParams from './WithParams.jsx'
import withNavigation from "./WithNavigation"
import LoginComponent from "./LoginComponent.jsx"
import ListTodosComponent from "./ListTodosComponent.jsx"
import ErrorComponent from "./ErrorComponent.jsx"
import HeaderComponent from "./HeaderComponent.jsx"
import FooterComponent from "./FooterComponent copy.jsx"
import LogoutComponent from "./LogoutComponent.jsx"
import WelcomeComponent from "./WelcomeComponent.jsx"
import AuthenticatedRoute from "./AuthenticatedRoute.jsx"
class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent)
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation />
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={
                            <AuthenticatedRoute>
                                <WelcomeComponentWithParams />
                            </AuthenticatedRoute>}
                        />
                        <Route path="/todos" element={
                            <AuthenticatedRoute>
                                <ListTodosComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}
export default TodoApp