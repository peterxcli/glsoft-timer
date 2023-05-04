import React, { useState } from 'react';
import styles from './trigger.module.scss';

const Trigger: React.FC = () => {
    const [isUp, setIsUp] = useState(true);

    const handleClick = () => {
        setIsUp(!isUp);
    };

    return (
        <div
            className={`${styles.arrow} ${isUp ? styles.up : styles.down}`}
            onClick={handleClick}
        ></div>
    );
};

export default Trigger;
