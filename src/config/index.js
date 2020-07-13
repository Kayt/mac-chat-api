import mongodb from 'mongodb';

export default {
    // "port": 3005,
    // "mongoUrl": "mongodb://localhost:27017/chat-api",
    "port": process.env.PORT,
    "mongoUrl": "mongodb+srv://mongo:<testpassword>@chatty.hhgh4.mongodb.net/<chatty>?retryWrites=true&w=majority",
    "bodyLimit": "100kb"
}