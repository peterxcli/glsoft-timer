import { Track } from "./lib/player";

interface Config {
    tracks: Track[];
}

const config: Config = {
    tracks: [
        {
            title: 'Valentine Hearts And Actions',
            url: "/audio/ValentineHeartsAndActions.wav",
        },
        {
            title: 'The World',
            url: '/audio/dio-brando-stand.mp3',
        },
        {
            title: 'Funny Valentine',
            url: '/audio/funny_valentine.mp3',
        },
        {
            title: 'Made In Heaven',
            url: '/audio/made-in-heaven-sfx.mp3',
        },
        {
            title: 'Muda Muda Muda',
            url: '/audio/mudamudamuda.mp3',
        },
        {
            title: 'Rero Rero Rero',
            url: '/audio/rerorerorero.mp3',
        },
        {
            title: 'Star Platinum',
            url: '/audio/star-platinum.mp3',
        },
        {
            title: 'Tusk Chimimi',
            url: '/audio/tusk-chimimi.mp3',
        },
        {
            title: 'Yes Yes Yes',
            url: '/audio/yesyesyes.mp3',
        },
    ],
}

export default config