<template>
  <div class="log-in">
    <div class="log-in-content">
      <b-form @submit.prevent="onSubmit">
        <b-form-group label="Email address:" label-for="input-email">
          <b-form-input
            id="input-email"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Password:" label-for="input-password">
          <b-form-input
            id="input-password"
            type="password"
            v-model="form.password"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Login",

  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },

  computed: mapState({
    toastMessage: state => state.toast
  }),

  methods: {
    onSubmit() {
      this.$store.dispatch("logIn", this.form);
    }
  },

  watch: {
    toastMessage(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.form.password = "";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.log-in {
  margin-top: 200px;
  display: flex;
  justify-content: center;
  & .log-in-content {
    width: 400px;
  }
  & button {
    display: block;
    margin: 0 auto;
  }
}
</style>
