require('../../../models/Article');

const mongoose  = require('mongoose');
const Article   = mongoose.model('article');

exports.getAllArticles = async () => {
  try {
    return await Article.find();

  } catch (err) {
    throw new Error(err)
  }
}