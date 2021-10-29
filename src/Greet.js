/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const Greet =(props) =>{
    return(
        //name hardcoded
        <div>
        {props.children}
        <h1>Hello {props.name}</h1>
        </div>
        //There is a limitation; must only return one web element
    )
}

export default Greet
