'use client';

import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useAppStore } from "../../store/store"
// import { Track, createPlayer, Player } from '@/lib/_player';
import { Track, createPlayer, Player } from '@/lib/player';

const TimerAudio: React.FC = () => {
    const { countDown, idle, time, initAudios, audios, audioIndex } = useAppStore()
    let player = useRef<Player | null>(null);

    useEffect(() => {
        player.current = createPlayer();
        player.current.setTracks(audios);
    }, [initAudios, audios]);

    const pre_time = useRef(0);

    useEffect(() => {
        if (!idle && pre_time.current != time && countDown && time == 0) {
            console.log('play audio', audioIndex)
            player.current?.playTrack(audioIndex);
        }
        pre_time.current = time;
    }, [time, audioIndex, audios, countDown, idle, pre_time]);

    return (
        <div className='audio'>

        </div>
    );
};

export default TimerAudio;