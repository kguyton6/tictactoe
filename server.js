require('dotenv').config({path: '.env.local'});

const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      Pusher = require('pusher');

const app = express();

const { PUSHER_APP_ID, PUSHER_APP_KEY, PUSHER_APP_SECRET, PUSHER_APP_CLUSTER, SERVER_PORT } = process.env;

const pusher = new Pusher({
    appId: PUSHER_APP_ID,
    key: PUSHER_APP_KEY,
    secret: PUSHER_APP_SECRET,
    cluster: PUSHER_APP_CLUSTER,
    useTLS: true
});


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', SERVER_PORT || 5000);

const server = app.listen(app.get('port'), () => {
    console.log(`Server running -> ${server.address().port}`)
});