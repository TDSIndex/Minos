const Discord = require('discord.js');
const client = new Discord.Client()

const ip = require('myip');

const { token } = require('./private/config.json')

client.on('ready', async () => {

    console.log(`${client.user.username} Is Online`);

});

client.on('message', async (msg) => {

    if(msg.author.bot) return;

    if(msg.content === '!!ip') {
        ip(function (e, ipAddress) {
            msg.channel.send("``" + ipAddress + "``");
        })
    }

})

client.login(token)