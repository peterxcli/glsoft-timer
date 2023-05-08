import React from 'react';
import { useAppStore } from '@/store/store';
import styles from './settingModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const SettingModal: React.FC = () => {
    const { countDown, idle, time, isOpen, toggleIsOpen, audios, setAudioIndex, audioIndex } = useAppStore();

    const togglePopup = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        toggleIsOpen();
    };

    const handleClick = (e: React.MouseEvent, index: number) => {
        e.stopPropagation();
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
                                        <>
                                            <div className={`${styles['list-item']} ${index == audios.length - 1 ? styles.last : ""}`} key={index} onClick={(event: React.MouseEvent) => handleClick(event, index)}>
                                                {audio.title}
                                                {/* Add a blue check icon if the index == audioIndex */}
                                                {index === audioIndex && <FontAwesomeIcon icon={faCheck} className={styles.check} />}
                                            </div>
                                        </>

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
