const { randomUUID } = require('crypto');

class Article {
	
	constructor ({ title, content }) {
		this._id = randomUUID();
		this.title = title;
		this.content = content;
	}

	isValidArticle() {

	}
}

exports.validatorSize = (title, content) => {
	
if (!title || !content) 
	return false;

if (title.length > 50 || content > 100) 
	return false;
 
	return true;

}

exports.validatorId = id_article => id_article.toLowerCase();