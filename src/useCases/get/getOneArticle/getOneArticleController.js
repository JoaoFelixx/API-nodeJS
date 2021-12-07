const { getOneArticle } = require('./getOneArticle');

const getOneArticleController = async (request, response) => {
	try {
    const { id: id_article } = request.params;
    const article = await getOneArticle(id_article);

    if (!article) return response.status(404).json({ result: 'Article not a found' });

    return await response.status(200).json(article);

  } catch (error) {
    return response.status(409).json({ result: 'Failed to fetch, try again later' })
  }
}

module.exports = getOneArticleController;