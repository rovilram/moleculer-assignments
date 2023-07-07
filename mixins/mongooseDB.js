const DbService = require("moleculer-db");
const MongooseAdapter = require("moleculer-db-adapter-mongoose");

module.exports = {
	mixins: [DbService],
	adapter: new MongooseAdapter("mongodb://localhost/moleculer-demo"),
};
