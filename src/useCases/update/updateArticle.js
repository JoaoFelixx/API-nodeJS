require('../../models/Article');

const mongoose  = require('mongoose');
const Article   = mongoose.model('article');

exports.updateArticle = async ({ _id, title, content }) => {
  try {
    return await Article.updateOne({ _id, title, content });
    
  } catch (err) {
    throw new Error(err)
  }
}