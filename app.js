require('dotenv').config();
const {Client, Intents} = require('discord.js');
const openAI = require('openai-api');
let openaiKey = new openAI(process.env.OPEN_API_KEY);