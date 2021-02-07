const controller = require('../controllers/controller');
const express    = require('express');
const router     = express.Router()



router.get('/',              		 controller.index);
router.get('/list-articles', 		 controller.listArticles);
router.get('/article/view/:id', 	 controller.viewArticle);

router.put('/article/edit/:id',      controller.editArticle);

router.delete('/article/delete/:id', controller.deleteArticle);

router.post('/register',     		 controller.registerArticle);


module.exports = router;