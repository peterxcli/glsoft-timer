import React, { useState } from 'react';
import styles from './clock.module.scss';
import { useAppStore } from '@/store/store';

const Clock: React.FC = () => {
    const { countDown, idle, time } = useAppStore()

    return (
        <div className={`${styles.clock}`} >
            <div style={{transform: `rotate(${time/5}deg)`, transition: "transform 0s ease-out, background-color 0s linear"}} className={`${styles['clock-icon']}`}>
                <div className={`${styles['clock-icon-hour']} `}></div>
            </div>
        </div>
    );
};

export default Clock;
