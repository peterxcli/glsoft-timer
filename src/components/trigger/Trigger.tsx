import React, { useState } from 'react';
import styles from './trigger.module.scss';
import Image from 'next/image';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useAppStore } from '@/store/store';

const Trigger: React.FC = () => {
    // const [isUp, setIsUp] = useState(true);
    const { time, idle, countDown, incrementTime, setTime, setCountDown, toggleCountDown, toggleIdle } = useAppStore()

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (time == 0) {
            setCountDown(false)
            return
        }
        toggleCountDown();
    };

    return (
        <div className={`${styles.arrow}`} >
            <Image
                className={`arrow-icon ${!countDown ? styles.up : styles.down}` }
                onClick={handleClick}
                src="/arrow-icon.png"
                alt='arrow'
                fill
                priority
                placeholder="blur"
                blurDataURL="/arrow-icon.png"
            />
            {/* <ArrowDownwardIcon className={`arrow-icon ${isUp ? styles.up : styles.down}`} /> */}
        </div>
    );
};

export default Trigger;
