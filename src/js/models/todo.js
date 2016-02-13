 'use strict';

 var $ = require('jquery');
 var Backbone = require('backbone');
 var _ = require('underscore');
 Backbone.$ = $;

	// Todo Model
// ----------

// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
module.exports.Todo = Backbone.Model.extend({
	// Default attributes for the todo
	// and ensure that each todo created has `title` and `completed` keys.
	defaults: {
		title: '',
		completed: false
	},

	// Toggle the `completed` state of this todo item.
	toggle: function () {
		this.save({
			completed: !this.get('completed')
		});
	}
});
