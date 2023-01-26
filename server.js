import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
    apiKey: process.env.OPENAI,
});

const openaiApi = new OpenAIApi(configuration);

// Handle post requests to the host name
app.post('/', async (req, res) => {

    try {
        const prompt = req.body.prompt;
        const openaiResponse = await openaiApi.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
        })

        const image = openaiResponse.data.data[0].url;
        res.send({ image });

    } catch (error) {
        console.error(error);
        res.status(500).send(error?.response.data.error.message);
    }
})

// Handle get requests to the host name

import { readFile } from 'fs/promises';
app.use(express.static('public'));

app.get('/', async (req, res) => {
    res.send(await readFile('index.html', 'utf-8'));
})

// Listen for post requests
app.listen(8080, () => console.log('Server is up and running on Port 8080'))

// Listen for get requests
app.listen(3000, () => console.log('Website is available!'));