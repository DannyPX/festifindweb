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
</style>
