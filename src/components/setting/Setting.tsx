import React, { useState } from 'react';
import styles from './setting.module.scss';
import Image from 'next/image';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useAppStore } from '@/store/store';
import SettingModal from './SettingModal';

const Setting: React.FC = () => {
    const { countDown, idle, time, toggleIsOpen } = useAppStore()

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        toggleIsOpen()
    };

    return (
        <div className={`${styles.setting}`} onClick={handleClick} >
            <div className={`${styles['setting-icon']}`}>
                <div className={`${styles['setting-icon-point']} `}></div>
                <div className={`${styles['setting-icon-pillar']} `}></div>
                <SettingModal></SettingModal>
            </div>
        </div>
    );
};

export default Setting;
