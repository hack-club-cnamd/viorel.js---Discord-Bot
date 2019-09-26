const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("you shower", {type: "WATCHING"})


    client.guilds.forEach((guild) => {
        console.log(guild.name)

        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })

        // general channel id : 624601637545050114

    })

    let generalChannel = client.channels.get("624601637545050114")
    // generalChannel.send("buna siua tuturor")
})

client.on('message', (receivedMessage) => {

    if(receivedMessage.author == client.user) 
    {
        return
    }
    // receivedMessage.channel.send("Message received, " + receivedMessage.author.toString() + ": " + receivedMessage.content)

    if(receivedMessage.content.startsWith("!")) 
    {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) 
{
    let fullCommand = receivedMessage.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)
    let timeout = 2000

    if(primaryCommand == "help") 
    {
        helpCommand(arguments, receivedMessage)
    }
    else if(primaryCommand == "add")
    {
        addCommand(arguments, receivedMessage)
    }
    else if(primaryCommand == "multiply")
    {
        multiplyCommand(arguments, receivedMessage)
    }
    else if(primaryCommand == "nword")
    {
        sayNigger(receivedMessage, timeout)
    }
    else if(primaryCommand == "react")
    {
        reactCommand(arguments, receivedMessage)
    }
    else
    {
        receivedMessage.channel.send("Io nus de paici nu inteleg ceai zas. Incearca `!help`, `!add`, `!multiply`, `!nword`, `!react`")
    }
}

function helpCommand(arguments, receivedMessage)
{
    if(arguments.length == 0)
    {
        receivedMessage.channel.send("ok nu imi pasa")
    }
}

function addCommand(arguments, receivedMessage)
{
    if(arguments.length < 2)
    {
        receivedMessage.channel.send("Not enough arguments.")
        return
    }

    let suma = 0
    arguments.forEach((value) => {
        suma = suma + parseFloat(value)
    })

    receivedMessage.channel.send("Suma numerelor " + arguments + " este " + suma.toString())
}

function multiplyCommand(arguments, receivedMessage)
{
    if(arguments.length < 2)
    {
        receivedMessage.channel.send("Not enough arguments.")
        return
    }

    let p = 1
    arguments.forEach((value) => {
        p = p * parseFloat(value)
    })

    receivedMessage.channel.send("Produsul numerelor " + arguments + " este " + p.toString())
}

function sayNigger(receivedMessage, NWORDTIMEOUT)
{
    receivedMessage.channel.send("Im gonna say the N Word")
    setTimeout(() => {
        sayTheN_Word(receivedMessage)
    }, NWORDTIMEOUT)
}

function sayTheN_Word(receivedMessage)
{
    receivedMessage.channel.send("Nigggaaaa")
    receivedMessage.react("👤")
}

function reactCommand(arguments, receivedMessage)
{
    if(arguments == "smile") receivedMessage.react("😃")
    else if(arguments == "haha") receivedMessage.react("😂")
    else if(arguments == "love") receivedMessage.react("😍")
    else receivedMessage.react("👍")
}



client.login("NjI0NjAyNDI5NTc2NDQ1OTY3.XYTZQA.HqiXqP21aLqiWEq4ITqtn8xKALw")