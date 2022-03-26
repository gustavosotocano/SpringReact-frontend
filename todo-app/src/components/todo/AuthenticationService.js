import { configure } from "@testing-library/react";
import axios from "axios";

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        console.log('executeBasicAuthenticationService '+username+":"+password)
        return axios.get('http://localhost:8080/basicauth',
            { headers: { authorization: this.createBasicAuthToken(username, password) } }
        )
    }

    executeJwtAuthenticationService(username, password) {
        console.log('executeJwtAuthenticationService '+username+":"+password)
        return axios.post('http://localhost:8080/authenticate',{
            username,
            password

          }
        )
    }
  
    registerSuccessfulLogin(username, password) {
        console.log('registerSuccessfulLogin '+username+":"+password)
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
    }

    registerSuccessfulLoginForJwt(username, token) {
        console.log('registerSuccessfulLoginJwt '+username+":"+token)
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createJWTToken(token));
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) return false;
        return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) return '';
        return user;
    }

    setupAxiosInterceptors(basicAuthHeader) {

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }

    createBasicAuthToken(username, password) {
        console.log(username+":"+password)
        return 'Basic ' + window.btoa(`${username}:${password}`);
    }
    createJWTToken(token) {
        console.log(token)
        return 'Bearer ' + token
    }
}
export default new AuthenticationService()