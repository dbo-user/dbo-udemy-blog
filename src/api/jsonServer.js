import axios from 'axios';

export default axios.create({
    // good for 8 hours then npm run tunnel in json-server folder to get a new http address
    baseURL: 'http://3aea4635.ngrok.io'
});

// steps:
// 1. in json-server folder - npm run db
// 2. in another json-server folder - npm run tunnel
// 3. copy forwarding http address similar to this: http://3aea4635.ngrok.io
// 4. in blog folder, edit jsonServer.js and paste new http address to baseURL line 5.
// 5. in blog folder - npm start