import React from "react";
import styles from "./loading.module.css"

const Loading = () => {
    return (
        <container className={styles.loadingContainer}>
            <h2>Retrieving your characters from the Tavern...</h2>
            <h3>This can take some time.</h3>
        </container>
    )
}

export default Loading;