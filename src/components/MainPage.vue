<template>
  <div>
    <header-block/>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import HeaderBlock from "./HeaderBlock";
import { setTimeout } from "timers";

export default {
  name: "MainPage",

  components: {
    HeaderBlock
  },

  computed: mapState({
    toastMessage: state => state.toast
  }),

  methods: {
    makeToast(message) {
      this.$bvToast.toast(message, {
        variant: "danger",
        toaster: "b-toaster-bottom-center",
        solid: true,
        bodyClass: "toast-class",
        hidden: this.resetToast()
      });
    },
    resetToast() {
      setTimeout(() => {
        this.$store.commit("resetToastMessage");
      }, 5000);
    }
  },

  watch: {
    toastMessage(newVal) {
      this.makeToast(newVal);
    }
  }
};
</script>

<style lang="scss">
.main {
  padding: 50px;
}
.toast-class {
  text-align: center;
  font-weight: bold;
}
</style>
