const routes   		  = require('./routes/routes');
const express  		  = require('express');
const mongoose 		  = require('mongoose');
const middleware_cors = require('./middleware/middleware-cors')

const app = express();


app.use(express.json());

app.use(middleware_cors);

mongoose.connect('mongodb://localhost/my_database_api', {
  	useNewUrlParser: 	  true,
  	useUnifiedTopology: true,
  	useFindAndModify: 	false,
  	useCreateIndex: 	  true

}).then(() => console.log('successful connection')

).catch(err => console.log('Error connection'));


app.use('/', routes);

const Port = 7878;

app.listen(Port, () => console.log('Serve on'));