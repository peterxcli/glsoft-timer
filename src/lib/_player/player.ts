'use client';

import { createPubSub } from '../pubsub';
import { createAudio } from './audio';
import { State, Track } from './types';

export const createPlayer = () => {
    const pubsub = createPubSub();
    const audio = createAudio();

    let state: State = {
        ...audio.getState(),
        tracks: [],
        currentTrackIndex: null,
        currentTrack: null,
    };

    const setState = (value: Partial<State>) => {
        state = { ...state, ...value };

        pubsub.publish('change', state);
    };

    audio.subscribe(setState);

    const changeTrack = () => {
        const track = state.currentTrack;

        if (track) {
            audio.setUrl(track.url);
            audio.play();
        }
    };

    return {
        play: audio.play,
        pause: audio.pause,
        seek: audio.seek,
        volume: audio.volume,
        getCurrentTime: audio.getCurrentTime,
        getElement: audio.getElement,
        onChangeCurrentTime: audio.onChangeCurrentTime,

        getState() {
            return state;
        },

        setQueue(tracks: Track[]) {
            setState({ tracks });
        },

        playTrack(trackIndex: number) {
            setState({
                currentTrackIndex: trackIndex,
                currentTrack: state.tracks[trackIndex],
            });

            changeTrack();
        },

        subscribe(listener: (newState: State) => void) {
            return pubsub.subscribe('change', listener);
        },
    };
};