exports.validatorSize = (title, content) => {
	
if (!title || !content) 
	return false;


if (title.length > 50 || content > 100) 
	return false;



else 
	return true;

}

exports.validatorId = id_article => {
	return id_article.toLowerCase();
}