<template>
    <div id='outer'>
        <div class="loader"></div>
    </div>
</template>

<script>
export default {
    mounted () {
        let _this = this
        this.$nextTick(() => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: "210799246921372", //You will need to change this
                cookie: true, // This is important, it's not enabled by default
                autoLogAppEvents : true,
                xfbml : true,
                version: "v7.0"
            })
            window.FB.AppEvents.logPageView()
            _this.FB = window.FB
            console.log('FB SDK was initialized as mixin')

            window.FB.getLoginStatus(function(response) {
                if(response.status == 'connected') {
                    window.FB.api('/me?fields', {fields: 'id,name,last_name,birthday,about,location'} , function(response) {
                        _this.$store.dispatch('setAccount', response)
                        _this.$store.dispatch('setWithAuth')
                        _this.$router.push('/home')
                    });
                } else {
                    _this.$store.dispatch('setNoAuth')
                    _this.$router.push('/login')
                }
            })
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
}
</script>

<style scoped>
.loader {
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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