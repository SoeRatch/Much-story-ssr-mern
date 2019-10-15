require('dotenv').config()
import compression from 'compression'
import express from 'express'
import bodyParser from 'body-parser';
import Promise from 'bluebird';
import mongoose from 'mongoose';
import routing from './routing'
import { WEB_PORT, STATIC_PATH } from '../shared/config'
import { isProd } from '../shared/util'
import renderApp from './render-app'
import { helloEndpointRoute } from '../shared/routes';
import auth from './routes/auth';
import users from './routes/users';
import blogcontent from './routes/blogcontent';
import collections from './routes/collections';
import category from './routes/category';
import emails from './routes/emails';
import Loadable from 'react-loadable';

const app = express()

app.use(compression())

//mongoose.connect(process.env.MONGODB_URL,{ useMongoClient: true});
mongoose.connect(process.env.MONGODB_URL,{ 
	useCreateIndex:true,
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(bodyParser.json());

/*mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://127.0.0.1/muchstory', { 
	useNewUrlParser: true,
	useUnifiedTopology: true
});*/

mongoose.Promise=Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.use(STATIC_PATH, express.static('dist'))  // dist for generated files
app.use(STATIC_PATH, express.static('public'))  // public for declarative ones

app.use("/api/auth",auth);
app.use("/api/users",users);
app.use("/api/blogcontent",blogcontent);
app.use("/api/collections",collections);
app.use("/api/category",category);
app.use("/api/emails",emails);
routing(app)

Loadable.preloadAll().then(() => {
		  app.listen(WEB_PORT, () => {
		  // eslint-disable-next-line no-console
		  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
		  '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`)
		});

}).catch(err => {
  console.log(err);
});

