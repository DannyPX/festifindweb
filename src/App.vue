<template>
  <div id="wrapper">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from './components/menu'

export default {
  components: {
    Menu,
  }
}
</script> 

<style>
@font-face {
  font-family: 'Berlin Sans';
  src: url('assets/Berlin Sans FB Regular.ttf');
}
@font-face {
  font-family: 'Nunito Regular';
  src: url('assets/Nunito Regular.ttf');
}
body{
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #51D5FF !important;
}
#wrapper {
  transition: margin .3s;
  margin-left: 350px;
  position:fixed;
}

.slide-enter-active {
    animation: slide-in .3s ease-in forwards;
}

.slide-leave-active {
    animation: slide-out .3s ease-in forwards;
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

.subtitle{
  font-family: 'Berlin Sans', sans;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 26px;
text-align: center;
}
</style>
