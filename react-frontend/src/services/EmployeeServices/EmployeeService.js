import configuration from '../../Config/configuration.json'
import axios from 'axios'

class EmployeeService{

    getEmployees(){
        return axios.get(configuration.apiBaseUrl+'/employees');
    }
};

export default new EmployeeService();