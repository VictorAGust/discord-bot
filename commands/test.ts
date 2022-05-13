import { ButtonInteraction, MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'testing',
    description: 'testing',

    slash: true,
    testOnly: true,

    callback: async ({ interaction: msgInt, channel }) => {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('ban_yes')
            .setEmoji('🐸')
            .setLabel('confirm')
            .setStyle('SUCCESS')
        )
        .addComponents(
            new MessageButton()
            .setCustomId('ban_no')
            .setLabel('Cancel')
            .setStyle('DANGER')
        )

        const linkRow = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')
            .setLabel('SURPRISE')
            .setStyle('LINK')
        )

        await msgInt.reply({
            content: 'Are you sure?',
            components: [row, linkRow],
        })

        const collector = channel.createMessageComponentCollector({
            max:1,
            time: 1000 * 15
        })

        collector.on('collect', (i: ButtonInteraction) => {
            i.reply({
                content: 'You clicked a button',
            })
        })

        collector.on('end', async (collection) => {
            collection.forEach((click) => {
                console.log(click.user.id, click.customId)
            })
            
            if (collection.first()?.customId === 'ban_yes') {
    
            }

            await msgInt.editReply({
                content: 'An action has already been taken.',
                components: [],
            })
        })
    },
} as ICommand