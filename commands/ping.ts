import { ICommand } from "wokcommands"

export default {
    category: 'testing',
    description: 'Replies with pong',

    slash: 'both',
    testOnly: true,

    callback: ({ }) => {
        return 'pong'
    },
} as ICommand