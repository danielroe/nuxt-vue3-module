<template>
  {{ result }}
  <br>
  <RouterLink :class="$style.test" to="/about">
    About page
  </RouterLink>
  &middot;
  <RouterLink :class="$style.test" to="/protected">
    Protected page (should navigate to /about)
  </RouterLink>
  <br>
  {{ $store.state.info }}
  <button class="test" @click="$store.commit('update', result + ' is the new value')">
    Update store
  </button>
  <br>
  asyncData: {{ asyncdata }}
  <br>
  <button class="test" @click="result++">
    Click everything and nothing
  </button>
</template>

<script>
export default {
  asyncData() {
    return {
      asyncdata: 'works'
    }
  },
  data: () => ({
    result: 1
  }),
}
</script>

<style module>
.test {
  color: green;
}
</style>
