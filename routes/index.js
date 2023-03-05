const express = require('express')
const router = express.Router();
var {createClient}   = require("redis");
var session = require('express-session');
var RedisStore  = require('connect-redis').default;

// Initialize client.
let redisClient = createClient()
redisClient.connect().catch(console.error)

// Initialize store.
let redisStore = new RedisStore(
  {
      client: redisClient,
      prefix: "myapp:",
  }
  // { host: '127.0.0.1', port: 6379, client: redisClient }
)

// Initialize sesssion storage.
router.use(
  session({
    store: redisStore,
    resave: false, // required: force lightweight session keep alive (touch)
    saveUninitialized: false, // recommended: only save session when data exists
    secret: "MITS_Gwalior",
  })
)

router.use('/user', require('./user/index') )

module.exports = router;