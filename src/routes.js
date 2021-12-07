const { Router } = require('express');
const router  = Router()
const {
  getAllArticleController,
  getOneArticleController,
  createArticleController,
  updateArticleController,
  deleteArticleController,
} = require('./useCases');

router.get('/articles/', getAllArticleController);
router.get('/articles/:id',getOneArticleController);

router.post('/articles/', createArticleController);

router.put('/articles/:id', updateArticleController);

router.delete('/articles/:id', deleteArticleController);

module.exports = router;