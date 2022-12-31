// Set Mongodb URL and Root URL
let APIROOT_URL = 'http://localhost:3001';
let THAI_MONGO_URL = 'mongodb+srv://thai:thai123@cluster0.l5pwkhm.mongodb.net/AgricultureQ&A'
let TIN_MONGO_URL = 'mongodb+srv://leductin:tin123@cluster0.vyulz25.mongodb.net/UserDB'


// Config Mongo Connection
let mongoConnection = {
    https: false,
    appname: 'Agriculture Q&A',
    port: process.env.PORT || 3000,
    url: APIROOT_URL,
    authenticationkey: '4TTeam',
    path: {
        public: '/public',
        tmp: '/tmp',
        docs: '/docs',
        tag: '/tag'
    },
    mongodb: {
        THAI_uri: THAI_MONGO_URL,
        TIN_uri: TIN_MONGO_URL,
        username: ''
    }
}



export default mongoConnection;