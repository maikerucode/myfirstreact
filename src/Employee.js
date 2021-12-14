import { useState, useEffect } from "react"
import employeeService from "./employeeService";

const Employee = () => {
    const[employees, setEmployees] = useState([])

    useEffect(
        () => {
            employeeService.getEmployees()
            .then(
                response => {
                    setEmployees(response.data)
                }
            )
            .catch(
            () => {
                console.log("goods na goods")   
                }
            )
        }
    )
    return(
    <div className="container">
        <h3>List of Employees</h3>
        <div>
            <table className="table table-hover table-light table-striped">
                <thead>
                <tr className="table-danger">
                    <td>Name</td>
                    <td>Department</td>
                    <td>Location</td>
                </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee => (
                                <tr>
                                    <td>{employee.name}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.location}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
            </table>
        </div>
    </div>
    )
}

export default Employee