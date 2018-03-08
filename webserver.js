import Express from 'express';
import path from 'path';
import http from 'http';
import url from 'url';

import WebSocket from 'ws';

const app = Express();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws, req) => {
  const location = url.parse(req.url, true);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});

/* serves main page */
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

/* serves all the static files */
app.get(/^(.+)$/, (req, res) => {
    console.log('static file request : ' + req.params[0]);
    res.sendFile(path.join(__dirname, req.params[0]));
});


const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log("Listening on ", server.address());
});
