import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: process.env.REACT_APP_USER_POLL_ID,
    ClientId: process.env.REACT_APP_CLIENT_ID
}

export default  new CognitoUserPool(poolData);