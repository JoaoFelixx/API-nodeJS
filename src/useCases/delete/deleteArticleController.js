const { deleteArticle } = require('./deleteArticle');

const deleteArticleController = async (request, response) => {
  try {
    await deleteArticle(request.params.id)

    return response.sendStatus(202)

  } catch (err) {
    return res.sendStatus(409)
  }
}

module.exports = deleteArticleController;