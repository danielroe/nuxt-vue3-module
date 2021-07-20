import { defineNuxtModule, extendBuild, requireModulePkg } from '@nuxt/kit'
import { readFile, writeFile } from 'fs-extra'
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
      nuxt.options.ssr = false
      console.info('disabling ssr due to issues with ssr support with vue3 + nuxt2')
    }

    const version = requireModulePkg('@vue/compat').version

    nuxt.options.cli.badgeMessages.push(greenBright(bold(`[Vue v${version}]`)))

    nuxt.hook('build:templates', async (templates) => {
      for await (const file of templates.templatesFiles) {
        if (typeof file === 'object' && file.src?.endsWith('template/client.js')) {
          let nuxtClientSource = await readFile(file.src, 'utf-8')
          nuxtClientSource = nuxtClientSource.replace('$parent.$children.forEach', '$parent.$children.filter(Boolean).forEach')
          await writeFile(join(__dirname, './templates/client.js'), nuxtClientSource)
          file.src = join(__dirname, './templates/client.js')
        }
      }
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
