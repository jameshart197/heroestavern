import React from "react";
import styles from "./loading.module.css"

const Loading = () => {
    return (
        <container className={styles.loadingContainer}>
            <h3>Retrieving your characters from the Tavern...</h3>
        </container>
    )
}

export default Loading;