export type AudioState = {
    duration: number;
    playing: boolean;
    volume: number;
};

export type Track = {
    url: string;
    title: string;
};

export type State = AudioState & {
    tracks: Track[];
    currentTrack: Track | null;
    currentTrackIndex: number | null;
};

export type Player = {
    play: () => void;
    pause: () => void;
    seek: (time: number) => void;
    volume: (volume: number) => void;
    getCurrentTime: () => number;
    getElement: () => HTMLAudioElement;
    onChangeCurrentTime: (listener: (time: number) => void) => void;
    getState: () => State;
    setQueue: (tracks: Track[]) => void;
    playTrack: (trackIndex: number) => void;
    subscribe: (listener: (newState: State) => void) => () => void;
};
