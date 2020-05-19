<template>
  <div id="outer">
    <h1 class="title">Welkom bij FestiFind</h1>
    <button class="btn btn-primary" @click="logInWithFacebook">Ga door met Facebook</button>
    <br />
    <router-link :to="{name: 'Register'}">
      <a>Geen Facebook? ga door zonder Facebook</a>
    </router-link>
  </div>
</template>
<script>
export default {
    name:"facebookLogin",
    mounted () {
        let _this = this
        this.$nextTick(() => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: "210799246921372", //You will need to change this
                cookie: true, // This is important, it's not enabled by default
                autoLogAppEvents : true,
                xfbml : true,
                version: "v13.0"
            })
            window.FB.AppEvents.logPageView()
            _this.FB = window.FB
            console.log('FB SDK was initialized as mixin')
        };
        (function (d, s, id) {
            let js, fjs = d.getElementsByTagName(s)[0]
            if (d.getElementById(id)) { return }
            js = d.createElement(s); js.id = id
            js.src = '//connect.facebook.net/en_US/sdk.js'
            fjs.parentNode.insertBefore(js, fjs)
            }(document, 'script', 'facebook-jssdk'))
        })
    },
    methods: {
        logInWithFacebook () {
            window.FB.login(function(response) {
                if (response.authResponse) {
                alert("You are logged in &amp; cookie set!");
                // Now you can redirect the user or do an AJAX request to
                // a PHP script that grabs the signed request from the cookie.
                } else {
                alert("User cancelled login or did not fully authorize.");
                }
            });
            return false;
        }
    }
};
</script>
<style>
.title {
  position: absolute;
  width: 278px;
  height: 111px;
  left: 41px;
  top: 136px;

  font-family: "Berlin Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 53px;
  text-align: center;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.btn {
  margin-top: 20%;
  background: #065bff;
  border-radius: 10px;

  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

a {
  font-family: 'Nunito Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#outer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  min-width: 85vw;
}
</style>