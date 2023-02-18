require("dotenv").config();
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const CLIENT_ID = `client_id=${process.env.CLIENT_ID}`
const REDIRECT_URI = `redirect_uri=${process.env.REDIRECT_URI}`
const uri = `https://www.pinterest.com/oauth/?${CLIENT_ID}&${REDIRECT_URI}&response_type=code&scope=boards:read`


app.get("/login", (req, res) => {
    res.redirect(`${uri}`);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

