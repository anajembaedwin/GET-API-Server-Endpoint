const express = require("express");

const app = express();

const cors = require('cors');

app.use(cors({
    methods: ['GET'],
    origin: '*'
}));

const users = { 
    "slackUsername": "iSommie", 
    "backend": true, 
    "age": 27, 
    "bio": "I am a budding Backend Developer who enjoys watching sci-fi movies" 
}

app.get("/users", (req, res) => {
    res.json(users);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

