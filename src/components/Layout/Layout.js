import React from "react"
import Aux from "../../hoc/Aux";
import styles from "./Layout.module.css"
import Toolbar from "../Toolbar/Toolbar";
import Devices from "../../containers/Devices/Devices";

const Layout = (props) => (
    <Aux>
        <div> <Toolbar/>, SideDrawer, Backdrop</div>

        <main className={styles.Content}>
            <Devices/>
            {/* {props.children} */}
        </main>    
    </Aux>
);

export default Layout;