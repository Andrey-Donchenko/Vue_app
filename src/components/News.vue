<template>
  <div class="news">
    <b-card v-for="item in data" :key="item.id" :title="item.title" tag="article" class="mb-5">
      <b-card-text>{{item.text}}</b-card-text>
    </b-card>
    <div class="total-news">Всего новостей {{data.length}}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "News",

  computed: mapState({
    data: state => state.news.data
  }),

  mounted: function() {
    this.$store.dispatch("getNews");
  }
};
</script>

<style scoped lang="scss">
.news {
  & .total-news {
    font-weight: bold;
  }
}
</style>
