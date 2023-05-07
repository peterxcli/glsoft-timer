import React, { useState } from 'react';
import styles from './reset.module.scss';
import Image from 'next/image';
import { useAppStore } from '@/store/store';

const Reset: React.FC = () => {
    const { resetTimer } = useAppStore()

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        resetTimer()
    };

    return (
        <div className={`${styles.cross}`} onClick={handleClick} >
            <Image
                className={`${styles['cross-icon']}` }
                src="/glsoft-timer/cross-icon.png"
                alt='arrow'
                fill
                priority
                placeholder="blur"
                blurDataURL="/glsoft-timer/cross-icon.png"
            />
        </div>
    );
};

export default Reset;
