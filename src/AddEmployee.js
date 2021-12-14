import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import employeeService from "./employeeService";
import { useParams } from "react-router-dom";

const AddEmployee = () => {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();
    const {employeeid} = useParams();

    const saveEmployee = (e) => {
        e.preventDefault();

        if(employeeid) {
            const employee =  {employeeid,  name, location, department};
        employeeService.putEmployee(employee)
        .then(
            response => (
                console.log("updated employee", response.data),
                navigate("/employees")
            )
        )
        .catch(
            error => (
                console.error("something went wrong!")
            )
        )
        }
    
        else {
            const employee =  {name, location, department};
        employeeService.postEmployee(employee)
        .then(
            response => (
                console.log("added new employee", response.data),
                navigate("/employees")
            )
        )
        .catch(
            error => (
                console.error("something went wrong!")
            )
        )
    }
        
}

    useEffect(
        () => {
            if(employeeid) {
                employeeService.getEmployee(employeeid)
                .then(
                    employee => {
                        setName(employee.data.name);
                        setDepartment(employee.data.department);
                        setLocation(employee.data.location);
                    }
                )
                .catch(
                    error => {
                        console.error("something went wrong!", error)
                    }
                )

            }
        }
    )

    return (
        <div className="container">
            <h3>Add Employee</h3>
            <form>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input 
                type="text" 
                className="form-control" 
                id="name" 
                placeholder="Add employee name"
                onChange={
                    (e) => (
                        setName(e.target.value)
                    )
                }
                />
            </div>
            <div className="mb-3">
                <label for="department" className="form-label">Department</label>
                <input 
                type="text" 
                className="form-control" 
                id="department" 
                placeholder="Add department name"
                onChange={
                    (e) => (
                        setDepartment(e.target.value)
                    )
                }
                />
            </div>
            <div className="mb-3">
                <label for="location" className="form-label">Location</label>
                <input 
                type="text" 
                className="form-control" 
                id="location" 
                placeholder="Add location name"
                onChange={
                    (e) => (
                        setLocation(e.target.value)
                    )
                }
                />
            </div>
            <button type="submit" className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
            </form>
        </div>
    )
}

export default AddEmployee