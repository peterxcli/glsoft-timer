import React, { useState } from 'react';
import styles from './reset.module.scss';
import Image from 'next/image';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useAppStore } from '@/store/store';

const Reset: React.FC = () => {
    const { reset } = useAppStore()

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        reset()
    };

    return (
        <div className={`${styles.cross}`} >
            <Image
                className={`${styles['cross-icon']}` }
                onClick={handleClick}
                src="/glsoft-timer/cross-icon.png"
                alt='arrow'
                fill
            />
            {/* <ArrowDownwardIcon className={`arrow-icon ${isUp ? styles.up : styles.down}`} /> */}
        </div>
    );
};

export default Reset;
