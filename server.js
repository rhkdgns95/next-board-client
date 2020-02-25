const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
// console.log("server.js DEV: ", dev);

const app = next({ dev });
const handle = app.getRequestHandler();

/**
 *  conn = () => {}
 *  
 *  서버가 연결된 경우, 콜백 실행.
 *   "dev": "next dev"       ->      "dev": "node server.js"
 *   "start": "next start"   ->      "start": "NODE_ENV=production" 
 */
const conn = () => {
    const server = express();

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, err => {
        if(err) throw err;
        console.log("> Ready on http://localhost:3000");
    })
};

app.prepare().then(conn).catch(ex => {
    console.log(ex.stack);
    process.exit(1);
});