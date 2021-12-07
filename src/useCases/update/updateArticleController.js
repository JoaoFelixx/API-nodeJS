const { updateArticle } = require('./updateArticle')

const hasError = ({ title, content }) => {
  if (!title || !content)
    return 'Preencha todos os campos';

  if (title.length > 50 || content > 100)
    return 'Titulo e/ou conteudo muito grandes';

  if (typeof title != 'string' || typeof content != 'string')
    return 'Ambos os dados precisam ser texto';

  return false;
}

const updateArticleController = async (request, response) => {
  try {

    const {
      body: {
        title,
        content,
      },
      params: { id }
    } = request;

    const error = hasError({ title, content });

    if (error != false) return response.status(400).json({
      error: true,
      message: error
    });

    await updateArticle({ _id: id, title, content });

    return response.sendStatus(202);
  } catch (err) {
    return response.sendStatus(409);
  }
}

module.exports = updateArticleController;