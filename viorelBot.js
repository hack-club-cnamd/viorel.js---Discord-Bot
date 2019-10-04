const Discord = require('discord.js')

const client = new Discord.Client()

const culoare = require("./colors.json")

const TOKEN = "NjI0NjAyNDI5NTc2NDQ1OTY3.XY82xg.ZtSkg_ah4aSePW-_gSb0ADGkPuY"


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
    // generalChannel.send("bitch nigga")
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

let servers = {}

let commands = [
    "`?help` ",
    "`?add` ", "`?multiply` ",
    "`?nword` ",
    "`?react` ",
    "`?creeper` ", "`?creepersong` ",
    "`?image`",
    "`?randomcat`",
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
    else if(primaryCommand == "mention")
    {
        mentionCommand(receivedMessage)
    }
    else if(primaryCommand == "play")
    {
        playCommand(receivedMessage, arguments)
    }
    else if(primaryCommand == "creeper")
    {
        creeperCommand(receivedMessage)
    }
    else if(primaryCommand == "creepersong")
    {
        let creeperEmbed = new Discord.RichEmbed()
        .setColor(culoare.pastel_green)
        .setTitle("Revenge (Minecraft Song)")
        .setFooter("Lyrics")
        .addField("CREEPER!   --   awwww maaan")
        .setDescription(
            "It's time to go get your revenge " +
            "So we back in the mine, got our pick axe swinging side to side, day and night " +
            "This task a grueling one, hope to find some diamonds tonight, oh how they shine " +
            "Then it's heads up, hear a sound you freeze up, turn around and look up, total shock fills your body, " +
            "Is this the end? " +
            "Can't believe it's you again " +
            "I could never forget those eyes " +
            "'Cause baby tonight, the creeper's trying to steal your stuff again, again, again" +
            "'Cause baby tonight, you grab your pick, shovel and bolt again, again, again" +
            "And run, run, run until it's done, done, then you run, run, run until the sun" +
            "Sun comes up in the morn'" +
            "'Cause baby tonight, the creeper's trying to steal your stuff again, again, again" +
            "Just when you think you're safe, hear some hissing from right behind, escape denied" +
            "That's a nice life you have, shame it's gotta end at this time, now you're mine" +
            "Then he blows up, and your health bar it drops, you could use a 1-up, get inside don't be tardy," +
            "Now you're stuck in there, all alone in despair, half a heart is left now but don't die" +
            "'Cause baby tonight, the creeper's trying to steal your stuff again, again, again" +
            "'Cause baby tonight, you grab your pick, shovel and bolt again, again, again" +
            "And run, run, run until it's done, done, then you run, run, run until the sun" +
            "Sun comes up in the morn'"+
            "'Cause baby tonight, the creeper's trying to steal your stuff again, again, again");
        receivedMessage.channel.send({embed : creeperEmbed});
    }
    else if(primaryCommand == "image")
    {
        ImageCommand(receivedMessage, arguments)
    }
    else if(primaryCommand == "randomcat")
    {
        randomCatCommand(receivedMessage)
    }
    // else if(primaryCommand == "randomfrog")
    // {
    //     randomFrogCommand(receivedMessage)
    // }
    else
    {
        receivedMessage.channel.send("Io nus de paici nu inteleg ceai zas. Incearca " + commands)
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
    else if(arguments == "love") receivedMessage.react("😍")
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

function creeperCommand(receivedMessage)
{
    receivedMessage.channel.send(receivedMessage.author.toString() + " awww maan")
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

    // receivedMessage.channel.send(randomNum)
}

// function randomFrogCommand(receivedMessage)
// {
//     let randomNum2 = Math.floor((Math.random() * 10) + 1)

//     switch (randomNum2)
//     {
//         case 1 : receivedMessage.channel.send({files : [""]}); break;
//         case 2 : receivedMessage.channel.send({files : [""]}); break;
//         case 3 : receivedMessage.channel.send({files : [""]}); break;
//         case 4 : receivedMessage.channel.send({files : [""]}); break;
//         case 5 : receivedMessage.channel.send({files : [""]}); break;
//         case 6 : receivedMessage.channel.send({files : [""]}); break;
//         case 7 : receivedMessage.channel.send({files : [""]}); break;
//         case 8 : receivedMessage.channel.send({files : [""]}); break;
//         case 9 : receivedMessage.channel.send({files : [""]}); break;
//         case 10 : receivedMessage.channel.send({files : [""]}); break;
//     }
// }


client.login(TOKEN)