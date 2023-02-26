import express, { Express } from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';
import { PinterestResponse } from './types';
import cookieParser from 'cookie-parser';

dotenv.config();

const PORT = process.env.PORT || 3001;
const app: Express = express();
app.use(cookieParser());

const CLIENT_ID = `client_id=${process.env.CLIENT_ID}`;
const REDIRECT_URI = `redirect_uri=${process.env.REDIRECT_URI}`;
const uri = `https://www.pinterest.com/oauth/?${CLIENT_ID}&${REDIRECT_URI}&response_type=code&scope=boards:read,pins:read`;

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
    .then((data: PinterestResponse) => {
      // TODO: Implement expires in and refresh token expires
      res.cookie('access_token', data.data.access_token);
      res.cookie('refresh_token', data.data.refresh_token);
      res.redirect(`${process.env.BASE_URL}/`);
    });
});

app.get('/boards', (req, res) => {
  axios
    .get('https://api.pinterest.com/v5/boards', {
      headers: {
        Authorization: `Bearer ${req.cookies.access_token}`,
        'Content-Type': 'application/json',
      },
    })
    .then((data) => res.json(data.data.items));
});

app.get('/boards/:id', (req, res) => {
  axios
    .get(`https://api.pinterest.com/v5/boards/${req.params.id}/pins`, {
      headers: {
        Authorization: `Bearer ${req.cookies.access_token}`,
        'Content-Type': 'application/json',
      },
    })
    .then((data) => res.json(data.data.items));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
