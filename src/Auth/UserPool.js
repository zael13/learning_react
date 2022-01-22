import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: process.env.REACT_APP_API_KEY,
    ClientId: process.env.CLIENT_ID
}

export default  new CognitoUserPool(poolData);