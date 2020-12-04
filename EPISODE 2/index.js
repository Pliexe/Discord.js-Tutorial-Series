const { Client } = require('discord.js');
const config = require('./config.json');

const bot = new Client({ disableMentions: "everyone" });

bot.on('ready', () => {
    console.log("Ready!");
});

bot.on('message', message => {
    if (message.author.bot || !message.content.startsWith(config.PREFIX)) return;

    let [command, ...args] = message.content.slice(config.PREFIX.length).split(/ +/g);

    switch (command.toLowerCase()) {
        case "ping":
            message.channel.send("Pong!");
            break;
    }
});

bot.login(config.TOKEN);