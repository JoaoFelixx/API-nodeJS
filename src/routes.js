const { Router } = require('express');
const router  = Router()
const {
  getAllArticleController,
  getOneArticleController,
  createArticleController,
  updateArticleController,
  deleteArticleController,
} = require('./useCases');

router.get('/article/', getAllArticleController);
router.get('/article/:id',getOneArticleController);

router.post('/article/', createArticleController);

router.put('/article/:id', updateArticleController);

router.delete('/article/:id', deleteArticleController);

module.exports = router;