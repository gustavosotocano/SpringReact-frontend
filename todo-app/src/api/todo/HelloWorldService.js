import axios from "axios";

class HelloWorldService {

    executeHellosWorldService() {
        return axios.get('http://localhost:8080/hello-world');
    }
    executeHellosWorldBeanService() {
        return axios.get('http://localhost:8080/hello-world-bean');
    }
    executeHellosWorldPathVariableService(name) {
      //  let username = 'in28minutes'
       // let password = 'dummy'

      //  let basicAuthHeader = 'Basic ' + window.btoa(`${username}:${password}`);
     //   console.log("authent " + basicAuthHeader+" "+`${username}:${password}:${name}`)
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
       // ,
        //    {
        //        headers: {
       //             authorization: basicAuthHeader
       //         }
       //     }
        );
    }
}
export default new HelloWorldService()