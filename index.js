const redis = require("redis");
const client = redis.createClient({
    host: 'localhost',
});

client.on("error", function(error) {
  console.error(error);
  process.exit(-1);
});

// client.set("foo", "bar");

client.get("akshay", function(err, reply) {
    console.log(reply.toString());
    process.exit(0);
});