const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({ 
    "slackUsername": "iSommie", 
    "backend": true, 
    "age": 27, 
    "bio": "I am a budding Backend Developer who enjoys watching sci-fi movies" 
    });
})

app.set('json spaces', 40)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

