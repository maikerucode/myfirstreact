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
    const [error, setError] = useState("");

    const saveEmployee = (e) => {
        e.preventDefault();
        if(name && location && department){
            setError("");
    
            if(employeeid){
                //update
                const employee = {employeeid, name, location, department};
                employeeService.putEmployee(employee) //promise
    
                .then(
                    response =>{
                        console.log("updated employee! Congrats", response.data)
                        navigate("/myfirstreact/employees");
                    }
                )
                .catch(
                    error => {
                        console.error("big oof");
                    }
                )
            }
    
            else{
                //combine the 3 data
                //add employee
                const employee = {name, location, department};
                employeeService.postEmployee(employee) //promise
    
                //for a promise, there is .then() and .catch()
                .then(
                    response =>{
                        console.log("added new employee! Congrats", response.data)
                        navigate("/myfirstreact/employees");
                    }
                )
                .catch(
                    error => {
                        console.error("big oof");
                    }
                )
            }
        }
        else{
            console.error("Oops! Employee cannot be placed. Please fill each entry...")
            setError("Oops! Employee cannot be placed. Please fill each entry...")
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
