import { useState, useEffect } from "react"
import employeeService from "./employeeService";
import { Link } from "react-router-dom"

const Employee = () => {
    const[employees, setEmployees] = useState([])

    useEffect( () => {
        refreshEmployeeTable();
    } 
    )

    const refreshEmployeeTable = () => {
        employeeService.getEmployees()
        .then(
            response => {
                setEmployees(response.data);
            }
        )
        .catch(
            error => {
                console.log("something went wrong", error)
            }
        )
    }

    const deleteEmployee = (employeeid) => {
        employeeService.deleteEmployee(employeeid)
        .then(
            response => {
                console.log("successfully deleted employee")
                refreshEmployeeTable();
            }
        )
        .catch(
            error => {
                console.error("something went wrong", error)
            }
        )
    }


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
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee => (
                                <tr key={employee.employeeid}>
                                    <td>{employee.name}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.location}</td>
                                    <td>
                                        <div>
                                            <Link className="btn btn-primary" to={`/edit/${employee.employeeid}`}>Update</Link>
                                            <button className="btn btn-danger" onClick={() => deleteEmployee(employee.employeeid)}>Delete</button>
                                        </div>
                                    </td>
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