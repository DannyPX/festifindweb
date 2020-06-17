<template>
  <div id="wrapper" v-if="onUrl()">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <Menu></Menu>
  </div>
  <div v-else>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Menu from "./components/menu";

export default {
  components: {
    Menu,
  },
  methods: {
    onUrl() {
      let noAuthURL = ["/", "/register", "/login", "/loginnormal", "/createchat", "/creategroup", "/profile", "/chat", "/groupchat", "/calender", "/festival", "/loading", "/nearby", "/profilepage", "/friendRequests" ];
      if (noAuthURL.includes(location.pathname)) {
        return false;
      } else if ((location.pathname).includes("/chat")) {
        return false;
      } else {
        return true
      }
    },
  },
};
</script>

<style>
html {
  overflow-y: auto !important;
}

@font-face {
  font-family: "Berlin Sans";
  src: url("assets/Berlin Sans FB Regular.ttf");
}
@font-face {
  font-family: "Nunito Regular";
  src: url("assets/Nunito Regular.ttf");
}

body,
html {
  height: 100%;
  width: 100%;
  background: linear-gradient(
      150.85deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 52.95%
    ),
    #51d5ff !important;
}
#wrapper {
  width: 100%;
  height: 100%;
  transition: margin 0.3s, padding 0.3s;
  position: fixed;
}

#content {
  position: relative;
  padding-left: 23px;
  padding-right: 23px;
  overflow: hidden;
  height: 100%;
}

.slide-enter-active {
  animation: slide-in 0.3s ease-in forwards;
}

.slide-leave-active {
  animation: slide-out 0.3s ease-in forwards;
}

@keyframes slide-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.subtitle {
  font-family: "Berlin Sans", sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 26px;
  text-align: center;
}

.title {
  margin-top: 18px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 18px;
  width: 60%;
  font-family: "Berlin Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 36px;
  /* identical to box height */
  text-align: center !important;

  color: #000000;
}

a {
  color: black;
}
</style>
