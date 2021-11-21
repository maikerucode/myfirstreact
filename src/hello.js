import {useEffect, useState} from "react";
import helloServices from "./helloServices";

const Hello = () =>{

    const[hello, setHello] = useState("")

    useEffect( () =>{
        helloServices.getHello()
        .then(response => {
            setHello(response.data)
        })
        .catch(err => {
            console.log("something went wrong!")
        })
    }
    )

    return hello;
}

export default Hello