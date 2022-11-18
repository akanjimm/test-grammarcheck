const express = require('express');
const { getBotResponse } = require('./controller');
const { upload } = require('./middleware');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to the testing ground");
})

app.post('/sendAudio', upload.single("file"), getBotResponse);


app.listen(PORT, () => {
    console.log(`Testing ground successfully started at http://${HOST}:${PORT} ...`)
})