import React, { useState, useEffect } from 'react';
import { useAppStore } from "../../store/store"
import styles from './timer.module.scss';
import { useDrag, useScroll, useWheel } from '@use-gesture/react'


const BigTimer: React.FC = () => {
    const { time, idle, countDown, incrementTime, setTime, setCountDown, toggleCountDown, toggleIdle } = useAppStore()

    const bind = useDrag(({ down, last, movement: [_, my], memo }) => {
        if (last && my === 0) { //click event
            toggleIdle();
            return
        }
        console.log(down, last, my, memo)
        memo = memo ?? my;
        const deltaY = my - memo;
        console.log(deltaY)
        incrementTime(Math.ceil(-deltaY))
        return my;
    })

    useEffect(() => {
        const timer = setInterval(() => {
            if (!idle) incrementTime(countDown ? -1 : 1)
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [time, idle, countDown, incrementTime]);

    return (
        <div className={styles.timer} {...bind()}>
            {new Date(time * 1000).toISOString().substr(11, 8)}
        </div>
    );
};

export default BigTimer;
