const { createArticleController } = require('./create');
const { deleteArticleController } = require('./delete');
const { updateArticleController } = require('./update');
const { 
  getAllArticleController, 
  getOneArticleController 
} = require('./get');

const useCases = {
  getAllArticleController,
  getOneArticleController,
  createArticleController,
  updateArticleController,
  deleteArticleController,
};

module.exports = useCases;