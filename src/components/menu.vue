<template>
  <div>
    <sidebar-menu @toggle-collapse="onToggleCollapse" :menu="menu"  :collapsed="collapsed"/>
  </div> 
</template>

<script>
export default {
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onToggleCollapse(collapsed) {
      if(collapsed) {
        document.getElementById('wrapper').style.marginLeft = '50px'
      } else {
        document.getElementById('wrapper').style.marginLeft = '350px'
      }
    },
    onResize () {
      if (window.innerWidth <= 767) {
        this.collapsed = true
        document.getElementById('wrapper').style.marginLeft = '50px'
      } else {
        this.collapsed = false
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
      ],
      collapsed: false
    }
  }
}
</script>

<style>
.collapsed {
  padding-left: 50px;
}
</style>