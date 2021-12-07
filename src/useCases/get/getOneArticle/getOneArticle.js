require('../../../models/Article');

const mongoose  = require('mongoose');
const Article   = mongoose.model('article');

exports.getOneArticle = async (id_article) => {
  try {
    return await Article.findOne({ _id:  id_article});

  } catch (err) {
    throw new Error(err)
  }
} 