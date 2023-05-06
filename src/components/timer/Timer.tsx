import React, { useState, useEffect } from 'react';
import { useAppStore } from "../../store/store"
import styles from './timer.module.scss';
import { useDrag, useScroll, useWheel } from '@use-gesture/react'


const BigTimer: React.FC = () => {
    const { time, idle, countDown, incrementTime, setTime, setCountDown, toggleCountDown, toggleIdle, timeUnit } = useAppStore()

    const bind = useDrag(({ down, last, movement: [_, my], memo }) => {
        if (last && my === 0) { //click event
            toggleIdle();
            return
        }
        console.log(down, last, my, memo)
        memo = memo ?? my;
        const deltaY = my - memo;
        console.log(deltaY)
        incrementTime(Math.ceil(-deltaY) * 1000 / timeUnit)
        if (time == 0) setCountDown(false)
        return my;
    }, )

    useEffect(() => {
        const timer = setInterval(() => {
            if (!idle) incrementTime(countDown ? -timeUnit : timeUnit)
        }, timeUnit);

        return () => {
            clearInterval(timer);
        };
    }, [idle, countDown, incrementTime, timeUnit]);

    const getTimeString = (time: number) => {
        // return new Date(time).toISOString().substring(11, 19)
        let timeString: string;
        if (time / 1000 < 60) {
            timeString = new Date(time ).toISOString().substring(17, 19);
        } else if (time / 1000 < 3600) {
            timeString = new Date(time).toISOString().substring(14, 19);
        } else {
            timeString = new Date(time).toISOString().substring(11, 19);
        }
        const timeSliceStr = timeString.split(':')
        let timeSliceNum: string[] = []
        timeSliceStr.forEach((value, index) => {
                timeSliceNum.push((index == 0) ? parseInt(value).toString() : value)
        })
        timeString = timeSliceNum.join(':')
        return timeString
    }

    return (
        <div className={styles.timer} {...bind()}>
            {getTimeString(time)}
        </div>
    );
};

export default BigTimer;
