import React, { useState } from 'react';
import styles from './clock.module.scss';
import Image from 'next/image';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useAppStore } from '@/store/store';

const Clock: React.FC = () => {
    const { countDown, reset, idle, time } = useAppStore()

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        reset()
    };

    return (
        <div className={`${styles.clock}`} >
            {/* <div  className={`${styles['clock-icon']} ${!idle ? !countDown ? styles['clockwise-rotate'] : styles['counterclockwise-rotate'] : ""}`}>
                <div className={`${styles['clock-icon-hour']} `}></div>
            </div> */}
            <div style={{transform: `rotate(${time/5}deg)`, transition: "transform 0s ease-out, background-color 0s linear"}} className={`${styles['clock-icon']}`}>
                <div className={`${styles['clock-icon-hour']} `}></div>
            </div>
        </div>
    );
};

export default Clock;
