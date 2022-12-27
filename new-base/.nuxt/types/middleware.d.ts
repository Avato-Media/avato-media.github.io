import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/jagof/Documents/AvatoMedia/Github/avato-media.github.io/new-base/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}