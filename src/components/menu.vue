<template>
  <div>
    <sidebar-menu @toggle-collapse="onToggleCollapse" :menu="menu" :collapsed="collapsed"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["menu", "collapsed"]),
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onToggleCollapse(collapsed) {
      if (collapsed) {
        document.getElementById("wrapper").style.marginLeft = "50px";
        if (window.innerWidth > 767) {
          document.getElementById("wrapper").style.paddingRight = "50px";
        }
      } else {
        document.getElementById("wrapper").style.marginLeft = "350px";
        if (window.innerWidth > 767) {
          document.getElementById("wrapper").style.paddingRight = "350px";
        }
      }
    },
    onResize() {
      if (window.innerWidth <= 767) {
        this.$store.dispatch("setCollapsed", true);
        document.getElementById("wrapper").style.marginLeft = "50px";
        document.getElementById("wrapper").style.paddingRight = "50px";
      } else {
        this.$store.dispatch("setCollapsed", false);
        document.getElementById("wrapper").style.marginLeft = "350px";
        document.getElementById("wrapper").style.paddingRight = "350px";
      }
    }
  }
};
</script>

<style>
.collapsed {
  padding-left: 50px;
}

.vsm--title {
  color: black;
  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
}

.v-sidebar-menu {
  background: white !important;
  background: radial-gradient(
      31.27% 15.52% at 3.36% 98.91%,
      #fdff87 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(
      180deg,
      #51d5ff 0%,
      rgba(135, 255, 176, 0.6875) 19.79%,
      rgba(255, 255, 255, 0) 38.02%
    ),
    #ffffff !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.v-sidebar-menu .vsm--mobile-bg {
    background-color: rgba(255, 255, 255, 0.85) !important;
    box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.25);
}


</style>