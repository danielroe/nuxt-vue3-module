import { defineSirocConfig } from 'siroc'
export default defineSirocConfig({
  rollup: {
    external: ['vue-loader/dist/pluginWebpack4'],
  },
  mkdist: {
    ext: 'js',
  },
})
