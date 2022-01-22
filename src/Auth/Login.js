import React, {useState} from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "./UserPool";
import StyledDiv from "./StyledDiv";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const onSubmit = (event) => {
        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        });

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log(data);
            },
            onFailure: (err) => {
                console.error(err);
            },
            newPasswordRequired: (data) => {
                console.log("newPasswordRequired", data);
            },
        });
    };

    return (
        // <div className="Login">
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
                <button type="submit">Login</button>
            </form>
        </StyledDiv>
    );
}

export default Login;