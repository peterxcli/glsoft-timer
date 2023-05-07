import React from 'react';
import { useAppStore } from '@/store/store';
import styles from './SettingModal.module.scss';

const SettingModal: React.FC = () => {
    const { countDown, idle, time, isOpen, toggleIsOpen, audios, setAudioIndex } = useAppStore();

    const togglePopup = (e: React.MouseEvent) => {
        e.stopPropagation();
        toggleIsOpen();
    };

    const handleClick = (index: number) => {
        // e.stopPropagation();
        // toggleIsOpen();
        setAudioIndex(index)
    };

    return (
        <>
            <div className={`${styles.popup}`} style={{ display: isOpen ? 'flex' : 'none' }}>
                <div className={`${styles.content}`}>
                    <div className={`${styles.header}`}>
                        <h2 className={`${styles.title}`}>Setting</h2>
                        <button className={`${styles['close-button']}`} onClick={togglePopup}>
                            Done
                        </button>
                    </div>
                    <div className={styles.main}>
                        <div className={styles['list-title']}>TIMER SOUNDS</div>
                        <div className={styles.list}>
                            {
                                audios.map((audio, index) => {
                                    return (
                                        <div className={`${styles['list-item']} ${index == audios.length-1 ? styles.last : ""}`} key={index} onClick={() => handleClick(index)}>
                                            {audio.title}
                                        </div>
                                    );
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SettingModal;
