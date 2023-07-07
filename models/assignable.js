const mongoose = require("mongoose");

const schema = new mongoose.Schema(
	{
		id: {
			type: String,
			required: true,
			unique: true,
			index: true,
		},
		status: {
			type: String,
			required: true,
			enum: ["active", "inactive"],
			default: "active",
			index: true,
		},
	},
	{
		timestamps: true,
	}
);

const assignableModel = mongoose.model("assignable", schema);

module.exports = { assignableModel };
