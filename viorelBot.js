const Discord = require('discord.js')

const client = new Discord.Client()

const TOKEN = "NjI0NjAyNDI5NTc2NDQ1OTY3.Xa3tgQ.UbG46BCuqK9YQpudqZGXwhS5zGg"

const ytdl = require("ytdl-core")

var servers = {}


client.on('guildMemberAdd', function(member) {
    member.guild.channel.find("name", "general").send(member.toString() + " welcome nigga")

    member.addRole(member.guild.roles.find("name", "lvl 69420 mafia god"))
})

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("you shower", {type: "WATCHING"})


    client.guilds.forEach((guild) => {
        console.log(guild.name)

        // guild.channels.forEach((channel) => {
        //     console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        // })

        // general channel id : 624601637545050114

    })

    let generalChannel = client.channels.get("624601637545050114")
})

client.on('message', (receivedMessage) => {

    if(receivedMessage.author == client.user) 
    {
        return
    }
    // receivedMessage.channel.send("Message received, " + receivedMessage.author.toString() + ": " + receivedMessage.content)

    if(receivedMessage.content.startsWith("?"))
    {
        processCommand(receivedMessage)
    }
})

let commands = [
    "`?help` ",
    "`?add` ", "`?multiply` ",
    "`?nword` ",
    "`?react` ",
    "`?image`",
    "`?randomcat`", "`randomfrog`",
    "`?play numa ca nu mere inca` "
];

function processCommand(receivedMessage) 
{
    let fullCommand = receivedMessage.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)
    let timeout = 2000

    if(primaryCommand == "help") 
    {
        helpCommand(receivedMessage)
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
    else if(primaryCommand == "mention")
    {
        mentionCommand(receivedMessage)
    }
    // else if(primaryCommand == "play")
    // {
    //     playCommand(receivedMessage, arguments)
    // }
    else if(primaryCommand == "image")
    {
        ImageCommand(receivedMessage, arguments)
    }
    else if(primaryCommand == "randomcat")
    {
        randomCatCommand(receivedMessage)
    }
    else if(primaryCommand == "randomfrog")
    {
        randomFrogCommand(receivedMessage)
    }
    else if(primaryCommand == "8ball")
    {
        eightBall(arguments, receivedMessage)
    }
    else
    {
        receivedMessage.channel.send("Io nus de paici nu inteleg ceai zas. Incearca " + commands)
    }
}

function helpCommand(receivedMessage)
{
    receivedMessage.channel.send("ok nu imi pasa")
}

function addCommand(arguments, receivedMessage)
{
    // if(isNaN(arguments))
    // {
    //     receivedMessage.channel.send("Ma fecioras, hai sa nu ne tiganim. Dami niste numere sa le adun sapai mai vorbim")
    //     return
    // }

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
    if(suma == 69 || suma == 420) receivedMessage.channel.send("nice")
}

function multiplyCommand(arguments, receivedMessage)
{
    // if(isNaN(arguments))
    // {
    //     receivedMessage.channel.send("Ma fecioras, hai sa nu ne tiganim. Dami niste numere sa le inmultesc sapai mai vorbim")
    //     return
    // }

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
    if(p == 69 || p == 420) receivedMessage.channel.send("nice")
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
    else if(arguments == "love" || arguments == "poop") receivedMessage.react("😍")
    else if(arguments == "shit") receivedMessage.react("💩")
    else if(arguments == "wow") receivedMessage.react("😮")
    else if(arguments == "cry") receivedMessage.react("😥")
    else if(arguments == "sad") receivedMessage.react("☹️")
    else if(arguments == "hmm") receivedMessag.react("🤔")
    else receivedMessage.react("👍")

    // switch(arguments)
    // {
    //     case "smile" : receivedMessage.react("😃"); break
    //     case "haha" : receivedMessage.react("😂"); break
    //     case "love" : receivedMessage.react("😍"); break
    //     case "shit" : receivedMessage.react("💩"); break
    //     case "wow" : receivedMessage.react("😮"); break
    //     case "" : receivedMessage.react("👍"); break
    // }
}

function mentionCommand(receivedMessage)
{
    receivedMessage.channel.send(receivedMessage.author.toString())
}

function ImageCommand(receivedMessage, arguments)
{
    if(arguments == "shrek")
    {
        receivedMessage.channel.send({files: ["https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png"]})
    }
    else if(arguments == "yobama")
    {
        receivedMessage.channel.send({files: ["https://i.kym-cdn.com/photos/images/newsfeed/001/441/147/84e.jpg"]})
    }
    else
    {
        receivedMessage.channel.send("Not enough arguments. Try `shrek`, `yobama`")
    }
}

// function playCommand(receivedMessage, arguments)
// {
//     function play(connection, receivedMessage)
//     {
//         var server = servers[receivedMessage.guild.id]

//         server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}))

//         server.queue.shift()

//         server.dispatcher.on("end", function(){
//             if(server.queue[0])
//             {
//                 play(connection, receivedMessage)
//             }
//             else
//             {
//                 connection.disconnect()
//             }
//         })
//     }

//     // if(!arguments[1])
//     // {
//     //     receivedMessage.channel.send("Please provide a link")
//     //     return
//     // }

//     if(!receivedMessage.member.voiceChannel)
//     {
//         receivedMessage.channel.send("Daca vrei sa-ti arat schema haida in voice channel ca altfel nu mere")
//         return
//     }

//     if(!servers[receivedMessage.guild.id]) servers[receivedMessage.guild.id] = {
//         queue: []
//     }

//     var server = servers[receivedMessage.guild.id]

//     server.queue.push(arguments[1])

//     if(!receivedMessage.guild.voiceConnection) receivedMessage.member.voiceChannel.join().then(function(connection){
//         play(connection, receivedMessage)
//     })
// }

function randomCatCommand(receivedMessage)
{
    let randomNum1 = Math.floor((Math.random() * 10) + 1)

    switch (randomNum1)
    {
        case 1 : receivedMessage.channel.send({files : ["https://data.whicdn.com/images/320079013/large.jpg"]}); break;
        case 2 : receivedMessage.channel.send({files : ["https://d.wattpad.com/story_parts/645102904/images/155fa9a1f61d3e7d880210827479.jpg"]}); break;
        case 3 : receivedMessage.channel.send({files : ["https://i.imgflip.com/2qqlka.png"]}); break;
        case 4 : receivedMessage.channel.send({files : ["https://i.pinimg.com/originals/44/d7/e0/44d7e0544ac97a48d734fa3cc70a3a60.png"]}); break;
        case 5 : receivedMessage.channel.send({files : ["https://ih0.redbubble.net/image.611105941.8396/flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg"]}); break;
        case 6 : receivedMessage.channel.send({files : ["https://i.redd.it/48o4y2lq5d121.jpg"]}); break;
        case 7 : receivedMessage.channel.send({files : ["https://i.ytimg.com/vi/OIZqAOBJNOw/hqdefault.jpg"]}); break;
        case 8 : receivedMessage.channel.send({files : ["https://i.imgur.com/54XVXeS.jpg"]}); break;
        case 9 : receivedMessage.channel.send({files : ["https://i.pinimg.com/originals/f6/e6/25/f6e625c53b9d056708f763f225dea616.png"]}); break;
        case 10 : receivedMessage.channel.send({files : ["https://epicpix.com/wp-content/uploads/2019/09/ff_6653.jpg"]}); break;
    }

    // receivedMessage.channel.send(randomNum1)
}

function randomFrogCommand(receivedMessage)
{
    let randomNum2 = Math.floor((Math.random() * 10) + 1)

    switch (randomNum2)
    {
        case 1 : receivedMessage.channel.send({files : ["https://pbs.twimg.com/ext_tw_video_thumb/1160039964400390145/pu/img/OfcvqoR9SyJFOCtU.jpg"]}); break;
        case 2 : receivedMessage.channel.send({files : ["https://i.imgur.com/KciEMjZ.jpg"]}); break;
        case 3 : receivedMessage.channel.send({files : ["https://66.media.tumblr.com/c8c2a3bd52187cb379a5c5d5d11a25ce/tumblr_pc7dsjVQ401x8aauno1_640.jpg"]}); break;
        case 4 : receivedMessage.channel.send({files : ["https://i.pinimg.com/originals/63/da/e6/63dae66f51f991edf9c3bde8e9a4fdb8.jpg"]}); break;
        case 5 : receivedMessage.channel.send({files : ["https://i.pinimg.com/originals/d3/55/8c/d3558c292f1a893a1a506fa404abc569.jpg"]}); break;
        case 6 : receivedMessage.channel.send({files : ["https://i.imgur.com/3cHgEiF.jpg"]}); break;
        case 7 : receivedMessage.channel.send({files : ["https://pbs.twimg.com/media/DsxAQz6WkAE6V0O.jpg"]}); break;
        case 8 : receivedMessage.channel.send({files : ["https://pbs.twimg.com/media/D6e4Fc_VUAEZolM.jpg"]}); break;
        case 9 : receivedMessage.channel.send({files : ["https://i.redd.it/55063wjrjdo21.jpg"]}); break;
        case 10 : receivedMessage.channel.send({files : ["https://i.ytimg.com/vi/ZJT9CeEhM10/hqdefault.jpg"]}); break;
    }

    // receivedMessage.channel.send(randomNum2)
}

function eightBall(arguments, receivedMessage)
{
    num = Math.floor((Math.random() * 10) + 1)

    if(arguments.length < 1)
    {
        receivedMessage.channel.send("Not enough arguments. Ask a YES or NO question.")
    }
    else
    {
        switch(num)
        {
            case 1 : receivedMessage.channel.send("YES"); break;
            case 2 : receivedMessage.channel.send("NO"); break;
            case 3 : receivedMessage.channel.send("hmm probably"); break;
            case 4 : receivedMessage.channel.send("maybe not"); break;
            case 5 : receivedMessage.channel.send("yes, and everyone knows that"); break;
            case 6 : receivedMessage.channel.send("umm im gonna say no"); break;
            case 7 : receivedMessage.channel.send("most likely"); break;
            case 8 : receivedMessage.channel.send("no, it`s not possible"); break;
            case 9 : receivedMessage.channel.send("i don`t think so"); break;
            case 10 : receivedMessage.channel.send("that`s correct!"); break;
        }
    }
    // receivedMessage.channel.send(num)
}


client.login(TOKEN)