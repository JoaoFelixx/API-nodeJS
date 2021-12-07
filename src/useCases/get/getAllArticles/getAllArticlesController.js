const { getAllArticles } = require('./getAllArticles');

const getAllArticlesController = async (request, response) => {
  try {
    const allArticles = await getAllArticles();

    if (allArticles.length === 0) return response.sendStatus(404);
  
    return response.status(200).json(allArticles);
    
  } catch (err) {
    return res.sendStatus(409);
  } 
}

module.exports = getAllArticlesController;