import React from "react";
import styles from "./backstory.module.css";
import { Tab } from "@headlessui/react";

const Backstory = ({ character }) => {
    return (
        <div className={styles.backstoryContainer}>
          <h4>Description</h4>
            <Tab.Group>
                <Tab.List>
                    <Tab>Backstory</Tab>
                    <Tab>Allies</Tab>
                    <Tab>Enemies</Tab>
                    <Tab>Factions and Organizations</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>{character.backstory}</Tab.Panel>
                    <Tab.Panel>{character.allies}</Tab.Panel>
                    <Tab.Panel>{character.enemies}</Tab.Panel>
                    <Tab.Panel>{character.factions_and_orgs}</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default Backstory;
