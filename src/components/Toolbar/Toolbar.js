import React from 'react';
import styles from "./Toolbar.module.css"
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';

Amplify.configure(awsExports);

function Toolbar({ signOut, user }) {
    return (
        <header className={styles.Toolbar}>
            <div>Hello {user.username}</div>
            <button className={styles.Button} onClick={signOut}>Sign out</button>   
        </header>
    );
};

export default withAuthenticator(Toolbar);