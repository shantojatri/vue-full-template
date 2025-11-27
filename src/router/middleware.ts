export function applyMiddleware(router, middlewareMap) {
  router.beforeEach((to, from, next) => {
    const middlewares = to.meta?.middleware || []

    for (const mw of middlewares) {
      const fn = middlewareMap[mw]
      if (fn) {
        const result = fn({ to, from })
        if (result === false) return next(false)
      }
    }

    next()
  })
}
