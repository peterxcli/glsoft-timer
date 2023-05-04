//a button that triggers a function
//props: text, function
//state: none
//dependencies: react, react-dom, react-router-dom, react-scripts
// Path: src\components\trigger\Trigger.tsx
// Compare this snippet from src\components\timer\Timer.tsx:
import React, { useState, useEffect } from 'react';
import { useAppStore } from "../../store/store"
import styles from './trigger.module.scss';

const Trigger: React.FC<{ text: string }> = ({ text }) => {
    const { toggleIdle } = useAppStore()
    const toggleTrigger = () => {
        toggleIdle()
    }
    return (
        <button className={styles.trigger} onClick={toggleTrigger}>
            {text}
        </button>
    );
};

export default Trigger;
