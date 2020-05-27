<template>
  <div id="outer">
    <b>{{ message }}</b>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" :value="credentials.email" @input="updateEmail">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Wachtwoord</label>
        <input type="password" class="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp" :value="credentials.password" @input="updatePassword">
        <small id="passwordHelp" class="form-text text-muted">We delen je wachtwoord met niemand.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputNaam1">Voor-en achternaam</label>
        <input type="text" class="form-control" id="exampleInputNaam1" aria-describedby="naamHelp" :value="credentials.name" @input="updateName">
      </div>
      <button type="button" class="btn btn-primary" v-on:click="registerAuth">Registreer</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(["message", "credentials"])
  },
  methods: {
    updateEmail(e) {
      this.$store.commit("UPDATE_EMAIL", e.target.value)
    },
    updateName(e) {
      this.$store.commit("UPDATE_NAME", e.target.value)
    },
    updatePassword(e) {
      this.$store.commit("UPDATE_PASSWORD", e.target.value)
    },
    registerAuth() {
      let _this = this
      _this.$store.dispatch("registerAccount").then(() => {
        if(_this.$store.getters.credentials.facebookid != '') {
          _this.$store.dispatch('fbAuthenticateAccount').then(() => {
            if(_this.$store.getters.login) {
              _this.$store.dispatch('setWithAuth')
              _this.$router.push({ name: "Home" })
            }
          })
        } else {
          _this.$store.dispatch('authenticateAccount').then(() => {
            if(_this.$store.getters.login) {
              _this.$store.dispatch('setWithAuth')
              _this.$router.push({ name: "Home" })
            }
          })
        }
      })
    }
  }
}
</script>