import React from "react";
import Aux from "../../../../hoc/Aux"

const EditDevice = (props) => {

    const deviceData = Object.keys(props.device)
        .map(dataKey => {
            return (
                <Aux>
                    <label for={dataKey}>Device {dataKey}: </label>
                    <input type="text" id={dataKey} name={dataKey} value={props.device[dataKey]}></input><br></br>
                </Aux>
            )
        });

    return (
        <Aux>
            <form>
                    <label for="name">Device name: </label>
                    <input type="text" id="name" name="name" value={props.device.name}></input><br></br>

                <br></br>
            </form>
            <button onClick={props.onSubmit}> Submit </button>
        </Aux>);
};

export default EditDevice