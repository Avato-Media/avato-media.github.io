import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/jagof/Documents/AvatoMedia/Github/avato-media.github.io/new-base/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}