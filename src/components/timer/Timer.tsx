import React, { useState, useEffect } from 'react';
import { useAppStore } from "../../store/store"
import styles from './timer.module.scss';
import { useScroll, useWheel } from '@use-gesture/react'


const BigTimer: React.FC = () => {
    const { time, idle, countDown, incrementTime, setTime, setCountDown, toggleCountDown, toggleIdle } = useAppStore()

    const bind = useWheel(({ movement: [_, my] }) => {
        incrementTime(-my / 5)
    })

    useEffect(() => {
        const timer = setInterval(() => {
            if(!idle) incrementTime(countDown ? -1 : 1)
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [time, idle, countDown, incrementTime]);

    return (
        <div className={styles.timer} {...bind()} onClick={toggleIdle}>
            {new Date(time * 1000).toISOString().substr(11, 8)}
        </div>
    );
};

export default BigTimer;
