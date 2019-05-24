<template>
  <div id="app">
    <loader></loader>
    <router-view></router-view>
  </div>
</template>

<script>
import Loader from "./components/elements/Loader";

export default {
  name: "app",

  components: {
    Loader
  }
};
</script>
