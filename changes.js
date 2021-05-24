module.exports = [
  { 
    "files": "src/app.js",
    "from": "var indexRouter = require('./routes/index');\nvar usersRouter = require('./routes/users');",
    "to": "// Loading env\nrequire('dotenv').config();"
  },
  { 
    "files": ["src/*.js", "bin/www"],
    "from": /var/g,
    "to": "const"
  },
  {
    "files": "src/app.js",
    "from": "app.use('/', indexRouter);\napp.use('/users', usersRouter);",
    "to": "// Routes\nrequire('./@routes')(app);"
  },
  {
    "files": "src/app.js",
    "from": "app.use(express.static(path.join(__dirname, 'public')));",
    "to": "app.use(express.static(path.join(__dirname, '../public')));"
  },
  {
    "files": "package.json",
    "from": "\"node ./bin/www\"",
    "to": "\"nodemon ./bin/www\""
  }, 
  {
    "files": "bin/www",
    "from": "server.listen(port);",
    "to": "server.listen(port, () => { console.log(`Express App is Running on http://localhost:${port}`) });"
  },
  {
    "files": "bin/www",
    "from": "const app = require('../app');",
    "to": "const app = require('../src/app');"
  }
]