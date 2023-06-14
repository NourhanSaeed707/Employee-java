import axios from "axios";
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employee";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(`${EMPLOYEE_API_BASE_URL}/add`, employee);
  }

  getEmployees() {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/getAll`);
  }

  deleteEmployee(id) {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/delete/${id}`);
  }

  getEmployeeById(id) {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/get/${id}`);
  }

  updateEmployeeById(employee, id) {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/edit/${id}`, employee);
  }
}

export default new EmployeeService();
