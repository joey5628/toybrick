import KoaRouter from 'koa-router'

const apiRouter = new KoaRouter({ prefix: '/api' })

apiRouter.get('/user', function(ctx, next) {
  console.log('ctx:', ctx)
  console.log('next:', next)
  this.body = {
    message: 'Delete success'
  }
})

export default apiRouter.routes()
