//**
//**
// The first line initialises the dotenv package and imports the environment variables from the dotenv. The second and third lines of code initialise the openai-api- and discord.js that you included in the dependencies section.

// The constant variables openai and client represent the instances of the package libraries used to interact with the respective APIs.

// The client variable represents your client and can also inform you of events on the server, such as new messages.
//**
//**

require('dotenv').config();
const {Client, Intents} = require('discord.js');
const openAI = require('openai-api');
let openaiKey = new openAI(process.env.OPEN_API_KEY);
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
let fragenVariable = "Tell me who you are?";
// client.on("message", function (message) {
//     if(message.author.bot) return;
//     return message.reply(`${message.content}`);
// })

client.on("message",function (message){
    if(message.author.bot) return;
    fragenVariable += `${message.content}`;
    (async ()=>{
        let getResponse = await openai.complete({
            engine:'davinci',
            prompt:fragenVariable,
            maxTokens:60,
            temperature:0.3,
            topP:0.3,
            presencePenalty:0,
            frequencyPenalty:0.5,
            bestOf:1,
            n: 1,
            stream:false,
            stop:["\n","\n"],
        });
        message.reply(`${getResponse.data.choices[0].text.substring(5)}`)
        fragenVariable += `${gptResponse.data.choices[0].text}`;
    })
});


client.login(process.env.BOT_TOKEN);