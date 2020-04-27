const { MongoClient } = require('mongodb');

var mongoClient = {
    uri: "mongodb://electron_mongodb:27017/electron_db", 
    conn: null,
    connect : async function () {
        const client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });
        this.conn = await client.connect();
    },
    getConnection : function () {
        return this.conn;
    }
  };

module.exports = mongoClient;