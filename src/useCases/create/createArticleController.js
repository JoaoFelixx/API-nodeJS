const { createArticle } = require('./createArticle');

const hasError = ({ title, content }) => {
	if (!title || !content)
		return 'Preencha todos os campos';

	if (title.length > 50 || content > 100)
		return 'Titulo e/ou conteudo muito grandes';

	if (typeof title != 'string' || typeof content != 'string')
		return 'Ambos os dados precisam ser texto';

	return false;
}

const createArticleController = async (request, response) => {
	const { title, content } = request.body;

	const error = hasError({ title, content }); 

	if (error != false) return response.status(400).json({
		error: true,
		message: error
	}); 

	try {
		await createArticle({ title, content });

		return response.sendStatus(201);

	} catch (err) {
		response.sendStatus(409)
	}
}

module.exports = createArticleController;