require('dotenv').config();
const express = require('express');
const axios = require('axios');
const PORT = process.env.PORT || 3001;
const app = express();

const CLIENT_ID = `client_id=${process.env.CLIENT_ID}`;
const REDIRECT_URI = `redirect_uri=${process.env.REDIRECT_URI}`;
const uri = `https://www.pinterest.com/oauth/?${CLIENT_ID}&${REDIRECT_URI}&response_type=code&scope=boards:read`;

app.get('/login', (req, res) => {
  res.redirect(`${uri}`);
});

app.get('/callback', (req, res) => {
  axios
    .post(
      'https://api.pinterest.com/v5/oauth/token',
      {
        code: req.query.code,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: 'authorization_code',
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${process.env.BASE64}`,
        },
      }
    )
    .then((res) => console.log(res));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
