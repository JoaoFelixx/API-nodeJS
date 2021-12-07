const { getAllArticles } = require('./getAllArticles');

const getAllArticlesController = async (request, response) => {
  try {
    const allArticles = await getAllArticles();

    if (!allArticles) return res.status(400).json({
			error:    true,
			message: 'nenhum artigo cadastrado'
		});
  
    return response.status(200).json(allArticles);
    
  } catch (err) {
    return res.sendStatus(409);
  } 
}

module.exports = getAllArticlesController;