import React, { useEffect, useState } from 'react';
import EmployeeService from '../../services/EmployeeServices/EmployeeService';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        EmployeeService.getEmployees().then(res => setEmployees(res.data));
    }, [])

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee first name</th>
                            <th>Employee last name</th>
                            <th>Employee email id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employee) => {
                                return (
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> 
            </div>
        </div>
    );
}

export default ListEmployeeComponent;