import React, {useState} from "react";
import styles from "./Device.module.css"
import EditDevice from "./EditDevice/EditDdevice";
import Plant from "./Plant/Plant";

const Device = (props) => {
    return (
        <div className={styles.Div}>            
            <Plant/>
            <p> Temperature: <b>{props.temperature}</b> °C</p>
            <p> Humidity: <b>{props.humidity}</b> %</p>
            <h2> {props.name} </h2>
            {/* <p> Status is {props.status} </p> */}
            {/* <p> Recommendation: {props.recommendation} </p> */}
            <button className={styles.Button} onClick={props.onEdit}> Edit </button>
        </div>
    );
}

export default Device; 