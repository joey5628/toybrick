import koa from 'koa'
import bodyParser from 'koa-bodyparser'
import koaStatic from 'koa-static'
import convert from 'koa-convert'
import api from './api'
import webpack from 'webpack'
import webpackDevMiddleware from 'koa-webpack-dev-middleware'
import webpackHotMiddleware from 'koa-webpack-hot-middleware'
import webpackConfig from '../build/webpack.dev.conf'

const app = new koa()
const env = process.env.NODE_ENV || 'development'
console.log(convert)
if (env === 'development') {
  const compiler = webpack(webpackConfig)
  const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: false,
    stats: {
      colors: true
    }
  })

  const hotMiddleware = webpackHotMiddleware(compiler, {
    log: () => {}
  })
  // force page reload when html-webpack-plugin template changes
  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
      hotMiddleware.publish({ action: 'reload' })
      cb()
    })
  })

  app.use(convert(devMiddleware))
  app.use(convert(hotMiddleware))

  // for dev log
  app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });
}

app.use(bodyParser())
app.use(api)
app.use(koaStatic('../dist'))

export default app
