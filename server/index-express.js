import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import index from './routes/index'
import users from './routes/users'
import config from '../config'
import devWebpackConfig from '../build/webpack.dev.conf'

const app = express()
// view engine setup
/*app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')*/

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../dist')))


const compiler = webpack(devWebpackConfig)
app.use(webpackDevMiddleware(compiler, {
  publicPath: devWebpackConfig.output.publicPath,
  stats: {
    colors: true
  }
}))
app.use(webpackHotMiddleware(compiler))

// app.use('/', index)
// app.use('/users', users)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app
