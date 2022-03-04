import axios from "axios"; 

class HelloWorldService{

    executeHellosWorldService(){
        return axios.get('http://localhost:8080/hello-world');
    }
    executeHellosWorldBeanService(){
        return axios.get('http://localhost:8080/hello-world-bean');
    }
    executeHellosWorldPathVariableService(name){
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
    }
}
export default new HelloWorldService()