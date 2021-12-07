const mongoose = require('mongoose');
const express  = require('express');
const routes   = require('./routes');
const { startMongoDB } 	  = require('./connections');
const { middleware_cors } = require('./middleware');

const app = express();

app.use(express.json());
app.use(middleware_cors);

startMongoDB();

app.use('/', routes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Serve on at http://localhost:${PORT}/`));