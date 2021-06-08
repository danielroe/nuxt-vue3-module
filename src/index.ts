import { defineNuxtModule, extendBuild } from '@nuxt/kit'
import type { Configuration } from 'webpack'
import { bold, greenBright } from 'chalk'
import VueLoaderPlugin from 'vue-loader/dist/pluginWebpack4'
import { join } from 'upath'

export default defineNuxtModule({
  name: 'nuxt-vue3',
  configKey: 'vue3',
  setup (_options, nuxt) {
    nuxt.options.alias.vue = '@vue/compat'

    if (nuxt.options.ssr) {
      console.error('nuxt-vue3 will only work if you set `ssr: false` in your `nuxt.config`')
    }

    nuxt.options.cli.badgeMessages.push(greenBright(bold('[Vue 3 compatibility build]')))

    nuxt.hook('build:templates', (templates) => {
      templates.templatesFiles.forEach((file) => {
        if (typeof file === 'object' && file.src?.endsWith('template/client.js')) {
          file.src = join(__dirname, './templates/client.js')
        }
      })
    })

    nuxt.hook('vite:extend', (ctx) => {
      ctx.config.vue.template = {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }
    })

    extendBuild((config: Configuration) => {
      const index = config.plugins!.findIndex(plugin => plugin.constructor.name === 'VueLoaderPlugin')
      if (index < 0) { return }
      config.plugins!.splice(index, 1, new VueLoaderPlugin())
    })

    const vueLoaderOptions = nuxt.options.build.loaders.vue as any
    vueLoaderOptions.compilerOptions = vueLoaderOptions.compilerOptions || {}
    vueLoaderOptions.compilerOptions = {
      compatConfig: {
        MODE: 2
      }
    }
  }
})
