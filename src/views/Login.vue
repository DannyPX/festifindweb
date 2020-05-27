<template>
  <div id="content">
    <h1 class="title">Welkom bij FestiFind</h1>
    <button class="btn btn-light" v-on:click="normalLogin">Login</button>
    <button class="btn btn-primary" @click="logInWithFacebook">
      Ga door met Facebook
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["credentials"])
  },
  mounted() {
    let _this = this;
    this.$nextTick(() => {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: "210799246921372", //You will need to change this
          cookie: true, // This is important, it's not enabled by default
          autoLogAppEvents: true,
          xfbml: true,
          version: "v7.0"
        });
        window.FB.AppEvents.logPageView();
        _this.FB = window.FB;
        console.log("FB SDK was initialized as mixin");
      };
      (function(d, s, id) {
        let js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    });
  },
  methods: {
    logInWithFacebook() {
      let _this = this;
      window.FB.login(function(response) {
        _this.$store.commit("SET_FBTOKEN", response.authResponse.accessToken);
        if (response.status == "connected") {
          //console.log('Welcome!  Fetching your information.... ');
          window.FB.api(
            "/me?fields",
            {
              fields: "id,name,last_name,birthday,about,location"
            },
            function(response) {
              _this.$store.dispatch("setAccount", response);
              _this.$store.dispatch("checkFBAccountExist").then(() => {
                if (_this.$store.getters.hasAcc) {
                  _this.$store.dispatch("fbAuthenticateAccount").then(() => {
                    if (_this.$store.getters.login) {
                      _this.$store.dispatch("setWithAuth");
                      _this.$router.push({
                        name: "Home"
                      });
                    }
                  });
                } else {
                  _this.$store.dispatch(
                    "setMessage",
                    "Je bent ingelogd op Facebook, " +
                      _this.$store.getters.credentials.name +
                      ", registreer je account"
                  );
                  _this.$router.push({ name: "Register" });
                }
              });
            }
          );
        } else {
          //console.log("User cancelled login or did not fully authorize.");
        }
      });
    },
    normalRegister() {
      window.FB.getLoginStatus(function(response) {
        if (response.status == "connected") {
          window.FB.logout();
        }
      });
      this.$store.dispatch("setMessage", "Registreer je account");
      this.$store.commit("CLEAR_CREDENTIALS");
      this.$router.push({ name: "Register" });
    },
    normalLogin() {
      window.FB.getLoginStatus(function(response) {
        if (response.status == "connected") {
          window.FB.logout();
        }
      });
      this.$store.dispatch("setMessage", "Login");
      this.$store.commit("CLEAR_CREDENTIALS");
      this.$router.push({ name: "LoginNormal" });
    }
  }
};
</script>

<style scoped>
.btn {
  background: #065bff;
  border-radius: 10px;
  height: 45px;
  width: 100%;
  font-size: 23px;
  font-family: "Nunito Regular";
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
}
.btn-light {
  margin-top: 38px;
  background: white;
  border-radius: 10px;
  height: 45px;
  width: 100%;
  font-size: 23px;
  font-family: "Nunito Regular";
}

.title {
  margin-top: 100px;
  margin-bottom: 30%;
  font-family: "Berlin Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 53px;
  text-align: center;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
