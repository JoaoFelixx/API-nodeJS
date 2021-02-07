require('../models/Article');

const mongoose  = require('mongoose');
const validator = require('../auth/auth');
const Article   = mongoose.model('article');


exports.index = (req, res) => res.status(200).json({titulo: 'como criar API'});


exports.registerArticle = async (req, res) => {

const { title, content } = req.body;
	
	if (!validator.validatorSize(title, content)) return res.status(400).json({
			error:    true,
			message: 'Preenha as informações de forma adequada'
	});

	await Article.create(req.body).then(() => {
		return res.status(200).json({
			error:    false,
			message: 'Cadastrado com sucesso'
		});

	}).catch(err => {
		return res.status(400).json({
			error:    true,
			message: 'Erro ao salvar no banco de dados'
		});
	});

}


exports.listArticles = async (req, res) => {
	await Article.find().then(article => {
		return res.status(200).json({article});
		
	}).catch(err => {
		return res.status(400).json({
			error:    true,
			message: 'nenhum artigo cadastrado'
		});
	})
}


exports.viewArticle = async (req, res) => {
	const id_article = validator.validatorId(req.params.id);

	await Article.findOne({ _id: id_article }).then(article => {
		
		if (article === null) return res.status(200).json({
				error:    true,
				message: 'ID não encontrado'
		});

		return res.json(article);

	}).catch(err => {
		return res.json({
			error:    true,
			message: 'Conexão com banco houve falhas'
		});
	});
}


exports.editArticle = async (req, res) => {
	await Article.updateOne({
		_id: req.params.id}, req.body, err => {
		
		if (err) return res.json({
			error:    true,
			message: 'Erro ao efetuar edição, tente novamente mais tarde'
		});


		return res.json({
			error:   false,
			message: 'Sua edição foi salva com sucesso'
		}); 
			
	});
}

exports.deleteArticle = async (req, res) => {
	await Article.deleteOne({ _id: req.params.id }).then(() => {
		return res.status(200).json({
			error:    false,
			message: 'Artigo deleteado com sucesso'
		});

	}).catch(err => {
		return res.status(400).json({
			error:    true,
			message: 'erro ao deletar, id inválido ou inexistente no banco de dados'
		});
	});
}