/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from "react";

//stateful component
//there are states in the class
//if the class is an object(not static), java would find its constructor


/*
/Since we are using "React.component" we need to call "super" component
- true for other cmponents

 this.state =
- equal to a json / java script object notation "{}"
    - file format for data/to pass data
    - key : value
"this" - would indicate that the state is owned by Button.js

Event Handler
- counter won't move since there is no logic
- web programming actions or "events"

this.setState
- one limitation of react; cannot authomatically update
- without setState, the state itself cannot change
 */
class Button extends React.Component{

    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    addCounter = () =>{
        this.setState(
            {
                count : this.state.count + 20
            }
        )
    }

    render(){
        return(
            <div>
            <button onClick = {this.addCounter} id="Button"><b>CLICK ME!!!</b></button>
            <p>counts = {this.state.count}</p>
            </div>
        )
    }

}

export default Button
