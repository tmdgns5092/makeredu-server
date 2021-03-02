const express           = require('express');
const app               = express();
const bodyParser        = require('body-parser');
const http              = require('http').Server(app);
const cookieParser      = require('cookie-parser');
const path              = require('path');

const indexRouter       = require('./routes/index.js');
const usersRouter       = require('./routes/user');
const groupRouter       = require('./routes/group');
const friendRouter      = require('./routes/friend');
const chatRouter        = require('./routes/chat');
const testRouter        = require('./routes/test');
const padRouter         = require('./routes/pad');
const fileRouter      = require('./routes/file');

const projectDocument   = require("./routes/projectDocument");
const templateDocument  = require("./routes/templateDocument");

const winston           = require('./config/config-winston')
const morgan            = require("morgan");
const cors              = require('cors');
const PORT              = 3000;


global.__basedir = __dirname;


// const io                = require('socket.io')(http,{});
// io.on('connection', socket => {
//   console.log("connected .... ");
//   socket.on('disconnect', () => {
//     io.sockets.emit('getCount', io.engine.clientsCount)
//   })
// });


// Logging
app.use(morgan('combined', {stream: winston.stream})); // morgan http 로그 미들웨어 추가

app.use(cors());
// Middlewares
// app.use(logger('dev'));      // winston logger
app.use(bodyParser());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type, x-access-token');
  next();
});


// API Router
app.use('/',        indexRouter);
app.use('/test',    testRouter);
app.use('/user',    usersRouter);
app.use('/group',   groupRouter);
app.use('/friend',  friendRouter);
app.use('/chat',    chatRouter);
app.use('/pad',     padRouter);
app.use('/file',    fileRouter);

app.use('/project', projectDocument);
app.use('/template',templateDocument);

// catch 404 and forward to error handler!
app.use((req, res, next) => { res.status(404).send({error: 'Not found'}); });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(">>>> ERROR handler ...");
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).send({ error: err })
});

// Server
http.listen(PORT, () => {console.log(`listening on * ${PORT}`);});
// http.listen(3000, () => winston.info(`Listening on port 3000...`));
