import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import 'dotenv/config'
// import testSchema from './test-schema'

const client = new DiscordJS.Client({
	intents: [Intents.FLAGS.GUILDS,
	Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
})

new WOKCommands(client, {
	commandsDir: path.join(__dirname, 'commands'),
	featuresDir: path.join(__dirname, 'features'),
	typeScript: true,
	mongoUri: process.env.MONGO_URI,
	testServers: ['YOUR_DISCORD_SERVER'],
	botOwners: ['YOUR_DISCORD_ACCOUNT']
})

//    mongoDB Save test
//    setTimeout(async () => {
//    await new testSchema({
//    message: 'hello world',
//    }).save()
//    }, 1000)


client.login(process.env.DISCORDBOT_TOKEN)