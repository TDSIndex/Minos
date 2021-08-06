const Discord = require('discord.js');
const client = new Discord.Client()

const ip = require('myip');
const { exec } = require("child_process")

const { token } = require('./private/config.json')

client.on('ready', async () => {

    console.log("\x1b[36m%s\x1b[0m", `${client.user.username} ` + "Is Online");
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

    if(msg.content === '!!launchts') {

        if(!msg.author.id === '310263028203651073' || !msg.author.id === '398684408057430016') {
            msg.channel.send('You Do Not Have Permission To Use This Command');
        }

    exec('"./ts3server.exe - Shortcut.lnk"').unref()
    msg.channel.send('Teamspeak Server Now Online')
    }

})

client.login(token)