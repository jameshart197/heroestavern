import React from "react";
import styles from "./loading.module.css"

const Loading = () => {
    return (
        <container className={styles.loadingContainer}>
            <h2>Retrieving your characters from the Tavern...</h2>
        </container>
    )
}

export default Loading;