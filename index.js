const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('clientReady', () => {
  console.log('Bot is online!');
}); 

client.on('messageCreate', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(process.evn.TOKEN);

