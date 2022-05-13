import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'testing',
    description: 'Sends an embed',

    Permissions: ['ADMINISTRATOR'],

    callback: async ({ message, text }) => {
        const embed = new MessageEmbed()
            .setDescription("Hello fella")
            .setTitle('Title')
            .setColor('RED')
            .setAuthor('Curupira')
            .setFooter('Footer')
            .addFields([{
                name: 'name',
                value: 'value',
                inline: true
            },
            {
                name: 'name two',
                value: 'value two',
                inline: true
            },
            ])
            .addField('name three', 'value three')


        const newMessage = await message.reply({
            embeds: [embed]
        })

        await new Promise(resolve => setTimeout(resolve, 5000))

        const newEmbed = newMessage.embeds[0]
    },
} as ICommand