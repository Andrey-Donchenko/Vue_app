<template>
  <div class="hdr-block">
    <router-link class="menu-item" to="/news">News</router-link>
    <router-link class="menu-item" to="/profile">Profile</router-link>
    <div class="menu-item log-out">
      <span v-if="!isLogin" @click="$router.push('login')">Sign in</span>
      <span v-if="isLogin" @click="logOut">Sign out</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderBlock",

  computed: mapGetters(["isLogin"]),

  methods: {
    logOut() {
      this.$store.dispatch("logOut");
    }
  }
};
</script>

<style scoped lang="scss">
.hdr-block {
  display: flex;
  height: 50px;
  width: 100%;
  background: #1b201b;
  align-items: center;
  justify-content: space-between;
  & .menu-item {
    display: inline-block;
    margin: 0 30px;
    text-transform: uppercase;
    color: #ffffff;
    cursor: pointer;
    &:hover {
      color: red;
      text-decoration: none;
    }
    &.router-link-active {
      color: red;
    }
    &.log-out {
      margin-left: auto;
    }
  }
}
</style>
