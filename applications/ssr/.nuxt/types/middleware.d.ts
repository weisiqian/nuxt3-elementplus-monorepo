import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "U:/study/nuxt3-elementplus-monorepo/applications/ssr/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}