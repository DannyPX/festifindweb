<template>
  <div id="outer">
      <button class="btn btn-primary" @click="logInWithFacebook">Inloggen met Facebook</button><br />
      <router-link :to="{name: 'Register'}">
        <button class="btn btn-primary">Maak een Festifind account</button>
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
.FacebookBtn{
  color:white;
  width: 150px;
  background-color: #3b5998;
  height: 2.5rem;
  border-radius: 6px;
  font-weight: 400;
  font-size: 0.8rem;
  padding: 4px;
  margin: 4px;
}
.Btn{
  color:white;
  width: 280px;
  background-color: #333333;
  height: 2.5rem;
  border-radius: 6px;
  font-weight: 400;
  font-size: 0.8rem;
  margin: 4px;
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