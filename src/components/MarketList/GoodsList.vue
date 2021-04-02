<template>
  <div class="list-content">
    <mu-container ref="container">
      <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
        <mu-list>
          <template v-for="i in num">
            <mu-list-item :key="i">
              <mu-list-item-title>{{ text }} Item {{ i }}</mu-list-item-title>
            </mu-list-item>
            <mu-divider :key="i"/>
          </template>
        </mu-list>
      </mu-load-more>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  data () {
    return {
      num: 20,
      refreshing: false,
      loading: false,
      text: 'List'
    }
  },
  methods: {
    refresh () {
      this.refreshing = true
      this.$refs.container.scrollTop = 0
      setTimeout(() => {
        this.refreshing = false
        this.text = this.text === 'List' ? 'Menu' : 'List'
        this.num = 20
      }, 2000)
    },
    load () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.num += 20
      }, 2000)
    }
  }
}
</script>

<style scoped>
.list-content {
  flex: 1 1 auto;
  overflow: auto;
  -webkit-overflow-scrolling: touch
}
</style>
