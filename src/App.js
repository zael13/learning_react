import styles from "./App.module.css"
import Measure from './Measure/Measure';
import Devices from "./Devices/Devices";

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className={styles.App}>
      {/* <h1>Hello {user.username}</h1> */}
      <Devices></Devices>
      <button className={styles.Button} onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);