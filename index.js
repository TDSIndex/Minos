const Discord = require('discord.js');
const client = new Discord.Client()

const ip = require('myip');

const { token } = require('./private/config.json')

client.on('ready', async () => {

    console.log(`${client.user.username} Is Online`);
    client.user.setActivity('Prefix: !!')
    client.user.setStatus('idle')

});

client.on('message', async (msg) => {

    if(msg.author.bot) return;

    if(msg.content === '!!ip') {
        ip(function (e, ipAddress) {
            msg.channel.send("``" + ipAddress + "``");
        })
        client.user.setStatus('online');
        setTimeout(function() {
            client.user.setStatus('idle')
        }, 5000)
    }

})

client.login(token)