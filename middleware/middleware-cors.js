const cors     = require('cors');

const middleware_cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
	app.use(cors());
	  next();
}

module.exports = middleware_cors;