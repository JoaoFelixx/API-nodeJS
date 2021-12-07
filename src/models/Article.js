const mongoose = require('mongoose');

const Article = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	}

});

mongoose.model('article', Article); 