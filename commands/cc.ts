import { ICommand } from "wokcommands";

export default {
    category: 'Moderation',
    description: 'Deletes mulitple messages at once',

    permissions: ['ADMINISTRATOR'],

    maxArgs: 1,
    expectedArgs: '[amount]',

    slash: 'both',
    testOnly: true,

    callback: async ({ message, interaction, channel, args }) => {
        const amount = args.length ? parseInt(args.shift()!) : 10

        if (message) {
            await message.delete()
        }
        //bulk delete
        const { size } = await channel.bulkDelete(amount, true)

        // fetch delete
        // const messages = await channel.messages.fetch({ init: amount})
        // const { size } = `Deleted ${size} messages(s)`

        const reply = `Delete ${size} message(s)`

        if (interaction) {
            return reply
        }
    }
} as ICommand