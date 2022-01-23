import React, {useState} from "react";
import Amplify, { API } from 'aws-amplify';
import { Auth } from "aws-amplify";
import styles from "./Measure.module.css"

const Measure = (props) => {
    const [email, setEmail] = useState("None")
    const [measure, setMeasure] = useState("None")   

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
        <div className={styles.Div}>
            <p> I am a {props.name} measure: {measure} </p>
            <p> Requested by user: {email} </p>
            <button className={styles.Button} onClick={async () => getData()}> Click to get data </button>
        </div>
    );
}

export default Measure; 