export function registerModules(app: any) {
  const files = import.meta.glob('./**/*.{ts,vue}', { eager: true })

  const moduleRoutes: any[] = []
  const moduleStores: any[] = []

  const moduleServices: any = {}
  const moduleValidations: any = {}
  const moduleComposables: any = {}
  const modulePermissions: any = {}
  const moduleConfigs: any = {}
  const moduleMiddleware: any = {}
  const moduleLayouts: any = {}

  Object.entries(files).forEach(([path, module]: any) => {
    // ------------------------- ROUTER -------------------------
    if (path.includes('/router/') && path.endsWith('.ts')) {
      if (module.default) moduleRoutes.push(...module.default)
    }

    // ------------------------- PINIA STORE -------------------------
    if (path.includes('/store/') && path.endsWith('.ts')) {
      if (typeof module.default === 'function') moduleStores.push(module.default)
    }

    // ------------------------- COMPONENTS -------------------------
    if (path.includes('/components/') && path.endsWith('.vue')) {
      const name = path.split('/').pop().replace('.vue', '')
      app.component(name, module.default)
    }

    // ------------------------- LAYOUTS -------------------------
    if (path.includes('/layouts/') && path.endsWith('.vue')) {
      const name = path.split('/').pop().replace('.vue', '')
      moduleLayouts[name] = module.default
    }

    // ------------------------- SERVICES -------------------------
    if (path.includes('/services/') && path.endsWith('.ts')) {
      const name = path.split('/').pop().replace('.ts', '')
      moduleServices[name] = module.default
    }

    // ------------------------- VALIDATIONS -------------------------
    if (path.includes('/validations/') && path.endsWith('.ts')) {
      const name = path.split('/').pop().replace('.ts', '')
      moduleValidations[name] = module.default
    }

    // ------------------------- COMPOSABLES -------------------------
    if (path.includes('/composables/') && path.endsWith('.ts')) {
      const name = path.split('/').pop().replace('.ts', '')
      moduleComposables[name] = module.default
    }

    // ------------------------- PERMISSIONS -------------------------
    if (path.includes('/permissions/') && path.endsWith('.ts')) {
      const name = path.split('/').pop().replace('.ts', '')
      modulePermissions[name] = module.default
    }

    // ------------------------- CONFIGS -------------------------
    if (path.includes('/config/') && path.endsWith('.ts')) {
      const name = path.split('/').pop().replace('.ts', '')
      moduleConfigs[name] = module.default
    }

    // ------------------------- MIDDLEWARE -------------------------
    if (path.includes('/middleware/') && path.endsWith('.ts')) {
      const name = path.split('/').pop().replace('.ts', '')
      moduleMiddleware[name] = module.default
    }

    // ------------------------- PLUGIN (index.ts) -------------------------
    if (path.endsWith('/index.ts') && typeof module.default === 'function') {
      module.default(app)
    }
  })

  return {
    moduleRoutes,
    moduleStores,
    moduleServices,
    moduleValidations,
    moduleComposables,
    modulePermissions,
    moduleConfigs,
    moduleMiddleware,
    moduleLayouts,
  }
}
