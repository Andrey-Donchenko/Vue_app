<template>
  <div class="profile">
    <div>Город: {{data.city}}</div>
    <div>Знание языков:</div>
    <ul>
      <li v-for="language in data.languages" :key="language">+ {{language}}</li>
    </ul>
    <div>Ссылки:</div>
    <ul>
      <li v-for="link in data.social" :key="link.label">
        <a :href="link.link" target="_blank">
          <img :src="images[link.label]" :alt="link.label" v-if="images[link.label]">
          <span v-else>{{link.label}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { images } from "../constants";

export default {
  name: "Profile",

  data() {
    return {
      images
    };
  },

  computed: mapState({
    data: state => state.user.data
  }),

  mounted: function() {
    this.$store.dispatch("getUserData");
  }
};
</script>

<style scoped lang="scss">
.profile {
  & ul {
    padding-left: 10px;
    list-style: none;
    > li {
      margin: 10px 0;
      & img {
        width: 40px;
        height: 40px;
      }
      & span {
        line-height: 3;
      }
    }
  }
}
</style>
