<template>
  <sidebar-menu @toggle-collapse="onToggleCollapse" :menu="menu" />
</template>

<script>
export default {
  methods: {
    onToggleCollapse(collapsed) {
      if(collapsed) {
        document.getElementById('wrapper').style.marginLeft = '50px'
      } else {
        document.getElementById('wrapper').style.marginLeft = '350px'
      }
    }
  },
  data() {
    return {
      menu: [{
          header: true,
          title: 'Account',
          hiddenOnCollapse: true
        },
        {
          href: '/login',
          title: 'Login',
          icon: 'fa fa-user'
        },
        {
          header: true,
          title: 'Festival',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Home',
          icon: 'fa fa-home'
        }
      ]
    }
  }
}
</script>

<style>

</style>