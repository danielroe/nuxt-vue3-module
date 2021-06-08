<template>
  {{ result }}
  <br>
  <RouterLink to="/about">
    About page
  </RouterLink>
  <br>
  {{ $store.state.info }}
  <br>
  <button class="test" @click="result++">
    Click everything and nothing
  </button>
</template>

<script>
export default {
  data: () => ({
    result: 1
  }),
}
</script>
