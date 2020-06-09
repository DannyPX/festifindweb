<template>
  <div id="content">
    <h1 class="title">Login</h1>
    <form class="form">
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          type="text"
          class="form-control input"
          id="exampleInputEmail1"
          :value="credentials.email"
          @input="updateEmail"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Wachtwoord</label>
        <input
          type="password"
          class="form-control input"
          id="exampleInputPassword1"
          :value="credentials.password"
          @input="updatePassword"
        />
      </div>
      <button type="button" class="btn btn-primary" v-on:click="loginAuth">
        Log in
      </button>
    </form>
    <a class="anchor" @click="() => $router.push({ name: 'Register' })"
      ><p>Nog geen account?</p></a
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["credentials", "message"]),
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
    },
  },
};
</script>

<style scoped>
.form {
  font-size: 20px;
  margin-top: 30%;
  text-align: center;
  font-family: "Berlin Sans";
}
.input {
  border-radius: 10px;
}
.btn {
  margin-top: 20px;
  background: #065bff;
  border-radius: 10px;
  height: 45px;
  width: 100%;
  font-size: 23px;
  font-family: "Nunito Regular";
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.title {
  margin-top: 100px;
  font-family: "Berlin Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  text-align: center;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
p {
  margin-top: 10px;
  font-family: "Nunito Regular";
  text-align: center;
}

.form-check-label {
  max-width: 180px;
}
</style>
