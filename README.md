# nuxt-vue3

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Enable Vue 3 (compat) mode in your Nuxt project

**This module enables Vue 3 compatibility mode in your Nuxt 2 project. It is _unofficial_ and purely for exploring the Vue 3 API. Take a look at [the instructions here](https://github.com/vuejs/vue-next/blob/master/packages/vue-compat/README.md) for more information on how to use the compatibility build.**

## Features

- [x] Client-side webpack support
- [ ] Client-side vite support
- [ ] Server-side support

## Known limitations and workarounds

- You will need to use `<RouterLink>` instead of `<NuxtLink>`
- This library overrides your `client.js` template from `@nuxt/vue-app`

## Quick setup

1. Add `nuxt-vue3` dependency to your project

```bash
yarn add nuxt-vue3 # or npm install nuxt-vue3
```

2. Add `nuxt-vue3` to the `buildModules` section of `nuxt.config.js`

```js
{
  buildModules: [
    'nuxt-vue3',
  ]
}
```

3. Run `nuxt`!
   

## Development

1. Clone this repository
2. Install dependencies using `yarn install`
3. Start development server using `yarn dev`

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-vue3/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-vue3

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-vue3.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-vue3

[github-actions-ci-src]: https://github.com/danielroe/nuxt-vue3-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/danielroe/nuxt-vue3-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/danielroe/nuxt-vue3-module.svg
[codecov-href]: https://codecov.io/gh/danielroe/nuxt-vue3-module

[license-src]: https://img.shields.io/npm/l/nuxt-vue3.svg
[license-href]: https://npmjs.com/package/nuxt-vue3
