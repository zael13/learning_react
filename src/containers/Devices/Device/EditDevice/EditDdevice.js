import React from "react";
import Aux from "../../../../hoc/Aux"

const EditDevice = (props) => {
    const nameChangeHandler = (event) => {
        props.device.name=event.target.value;
    };

    if (props.device) {
        return (
            <Aux>
                <form>
                    <label for="name">Device name: </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        onChange={nameChangeHandler} 
                        defaultValue={props.device.name}
                    />
                    <br/>
                    <br/>
                </form>
                <button onClick={props.onSubmit}> Submit </button>
            </Aux>);
    } else {
        return null
    }
};

export default EditDevice