import { Track } from "./lib/player";

interface Config {
    tracks: Track[];
}

const config: Config = {
    tracks: [
        {
            title: 'Valentine Hearts And Actions',
            url: "/glsoft-timer/audio/ValentineHeartsAndActions.wav",
        },
        {
            title: 'The World',
            url: '/glsoft-timer/audio/dio-brando-stand.mp3',
        },
        {
            title: 'Funny Valentine',
            url: '/glsoft-timer/audio/funny_valentine.mp3',
        },
        {
            title: 'Made In Heaven',
            url: '/glsoft-timer/audio/made-in-heaven-sfx.mp3',
        },
        {
            title: 'Muda Muda Muda',
            url: '/glsoft-timer/audio/mudamudamuda.mp3',
        },
        {
            title: 'Rero Rero Rero',
            url: '/glsoft-timer/audio/rerorerorero.mp3',
        },
        {
            title: 'Star Platinum',
            url: '/glsoft-timer/audio/star-platinum.mp3',
        },
        {
            title: 'Tusk Chimimi',
            url: '/glsoft-timer/audio/tusk-chimimi.mp3',
        },
        {
            title: 'Yes Yes Yes',
            url: '/glsoft-timer/audio/yesyesyes.mp3',
        },
    ],
}

export default config