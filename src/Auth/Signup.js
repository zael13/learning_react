import React, {useState} from "react";
import UserPool from "./UserPool";
import StyledDiv from "./StyledDiv";

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const onSubmit = (event) => {
        event.preventDefault();

        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) {
                console.error(err);
            } 
            console.log(data);
        });
    };

    return (
        <StyledDiv>
            <form onSubmit={onSubmit}> 
                <label htmlFor="email">Email </label>
                <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value) } >
                </input>
                <p></p>
                <label htmlFor="password">Password </label>
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value) } >
                </input>
                <p></p>
                <button type="submit">Signup</button>
            </form>
        </StyledDiv>
    );
}

export default Signup;