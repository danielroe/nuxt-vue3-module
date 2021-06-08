export default {
  ssr: false,
  components: true,
  alias: {
    'nuxt-vue3': require.resolve('../src'),
  },
  buildModules: [
    '../src',
    // 'nuxt-vite',
    '@nuxt/typescript-build',
  ],
}
