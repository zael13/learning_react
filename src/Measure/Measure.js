import React, {useState} from "react";
import Amplify, { API } from 'aws-amplify';
import { Auth } from "aws-amplify";

const Measure = (props) => {
    const [email, setEmail] = useState("")
    const [measure, setMeasure] = useState("")   

    const getData = async () => { 
        const apiName = 'ServiceApi';
        const path = '/Stage';
        const myInit = { 
          headers: { 
            Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
          },
        };
    
        return await API.get(apiName, path, myInit)
            .then(response => {
                console.log(response);
                setEmail(response.email)
                setMeasure(response.output.data)
            })
            .catch(error => {
                console.log(error);
            });;
    }

    const value = Math.random() * 10
    return (
        <div>
            <p> I am a {props.name} measure: {measure} </p>
            <p> Requested by user: {email} </p>
            <button onClick={async () => getData()}> Click to get data </button>
        </div>
    );
}

export default Measure; 