"use strict";
const DbMongooseService = require("../mixins/mongooseDB");
const { assignableModel } = require("../models/assignable");

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
	name: "assignable",

	mixins: [DbMongooseService],

	model: assignableModel,

	/**
	 * Settings
	 */
	settings: {},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		/**
		 * List of Assignables
		 *
		 * @returns
		 */
		list: {
			rest: {
				method: "GET",
				path: "/",
			},
			async handler(ctx) {
				return ctx.call("assignable.find");
			},
		},
		add: {
			rest: {
				method: "POST",
				path: "/",
			},
			async handler(ctx) {
				return ctx.call("assignable.create", ctx.params);
			},
		},
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {},

	/**
	 * Service created lifecycle event handler
	 */
	created() {},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {},
};
