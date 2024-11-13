import { createMachine } from 'xstate';

export const videoPlayerMachine = createMachine({
    id: 'videoPlayer',
    initial: 'paused',
    states: {
        idle: {
            on: { PLAY: 'playing' }
        },
        playing: {
            on: {
                PAUSE: 'paused',
                MINIMIZE: 'minimized',
                CLOSE: 'idle',
                MAXIMIZE: 'maximized',
                REPLAY: 'replaying',
            }
        },
        paused: {
            on: {
                PLAY: 'playing',
                CLOSE: 'idle',
                MAXIMIZE: 'maximized',
                REPLAY: 'replaying',
            }
        },
        minimized: {
            on: {
                RESTORE: 'playing',
                CLOSE: 'idle',
                MAXIMIZE: 'maximized',
            }
        },
        maximized: {
            on: {
                MINIMIZE: 'minimized',
                RESTORE: 'playing',
                CLOSE: 'idle',
            }
        },
        replaying: {
            entry: 'resetVideo',
            on: {
                PLAY: 'playing',
                PAUSE: 'paused',
            }
        }
    }
});




