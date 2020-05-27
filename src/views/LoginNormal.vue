<template>
  <div id="outer">
    <b>{{ message }}</b>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          :value="credentials.email"
          @input="updateEmail"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Wachtwoord</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          :value="credentials.password"
          @input="updatePassword"
        />
      </div>
      <button type="button" class="btn btn-primary" v-on:click="loginAuth">
        Log in
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["credentials", "message"])
  },
  methods: {
    updateEmail(e) {
      this.$store.commit("UPDATE_EMAIL", e.target.value);
    },
    updatePassword(e) {
      this.$store.commit("UPDATE_PASSWORD", e.target.value);
    },
    loginAuth() {
      let _this = this;
      _this.$store
        .dispatch("authenticateAccount")
        .then(() => {
          if (_this.$store.getters.login) {
            _this.$store.dispatch("setWithAuth");
            _this.$router.push("/home");
          }
        })
        .catch(() => {});
    }
  }
};
</script>

<style scoped>
.form-check-label {
  max-width: 180px;
}
</style>
