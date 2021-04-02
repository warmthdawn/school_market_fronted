<template>
  <div class="list-box">
    <SearchBar/>
    <GoodsList />
    <mu-container>
      <mu-bottom-nav>
        <mu-bottom-nav-item title="Recents" icon="restore"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
import SearchBar from '@/components/MarketList/SearchBar'
import GoodsList from '@/components/MarketList/GoodsList'

export default {
  name: 'MarketList',
  components: { GoodsList, SearchBar }

}
</script>

<style scoped lang="less">
.list-box {
  height: 100%;
  display: flex;
  flex-direction: column;
}

</style>
