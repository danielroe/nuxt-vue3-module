<template>
  <div>
    Global component
  </div>
</template>

<script>
export default {
  async setup () {
    await new Promise(resolve => setTimeout(resolve, 3000))
  }
}
</script>
