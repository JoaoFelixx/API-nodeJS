require('../../models/Article');

const mongoose = require('mongoose');
const Article  = mongoose.model('article');

exports.createArticle = async ({ title, content }) => {
  try {  
    return await Article.create({ title, content });
    
  } catch (err) {
    throw new Error(err) 
  }
}