<template>
  <mu-paper class="list-appbar">
    <mu-text-field icon="search" class="my-text" placeholder="搜索" full-width/>
    <mu-button icon class="my-button">
      <mu-icon value="more_vert"></mu-icon>
    </mu-button>
  </mu-paper>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style scoped>
.list-appbar {
  padding-top: 10px;
  width: 100%;
  display: flex;
}

</style>
