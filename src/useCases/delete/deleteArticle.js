require('../../models/Article');

const mongoose  = require('mongoose');
const Article   = mongoose.model('article');

exports.deleteArticle = async (_id) => {
  try {
    return await Article.deleteOne({ _id });
    
  } catch (err) {
    throw new Error(err)
  }
}