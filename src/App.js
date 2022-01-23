import styles from "./App.module.css"
import Measure from './Measure/Measure';

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className={styles.App}>
      {/* <h1>Hello {user.username}</h1> */}
      <Measure></Measure>
      <button className={styles.Button} onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);