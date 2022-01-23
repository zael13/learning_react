import axios from "../axios-api";
import Amplify, { API } from 'aws-amplify';
import { Auth } from "aws-amplify";

const measure = (props) => {

    const getData = async () => { 
        const apiName = 'ServiceApi';
        const path = '/Stage';
        const myInit = { 
          headers: { 
            Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
            // "Access-Control-Allow-Credentials" : true,
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers": "Content-Type",
            // "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        };
    
        return await API.get(apiName, path, myInit)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });;
    }

    // const getHandler = () => {
    //     // axios.get()
    //     //     .then(response => console.log(response))
    //     //     .catch(error => console.log(error))
    //     // const myInit = { // OPTIONAL
    //     //     // headers: {}, // OPTIONAL
    //     //     // headers: {
    //     //     //     "Access-Control-Allow-Headers" : "Content-Type",
    //     //     //     "Access-Control-Allow-Origin": "https://www.example.com",
    //     //     //     "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    //     //     // },
    //     //     headers: {
    //     //         "Access-Control-Allow-Credentials": "True",
    //     //         "Access-Control-Allow-Headers": "Content-Type",
    //     //         "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    //     //         "Access-Control-Allow-Origin": "*",
    //     //     }
    //     // };
    //     const myInit = { 
    //         headers: { 
    //           Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
    //         },
    //       };

    //     API.get("ServiceApi", "/Stage", "")
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(error => {
    //             console.log(error.response);
    //         });
    // }

    const value = Math.random() * 10
    return (
        <div>
            <p> I am a {props.name} measure: {value} </p>
            <button onClick={async () => getData()}> Click to get data </button>
        </div>
    );
}

export default measure; 