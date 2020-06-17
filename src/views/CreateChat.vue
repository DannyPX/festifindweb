<template>
  <div id="content">
    <div class="d-flex justify-content-between top">
      <a href="javascript:history.go(-1)">
        <i class="fas fa-arrow-left fa-2x back-btn"></i>
      </a>
      <h1 class="header">Kies een vriend</h1>
      <div class="fillright"></div>
    </div>

    <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
      <i class="fas fa-search" aria-hidden="true"></i>
      <input
        class="form-control form-control-sm ml-3 w-75"
        type="text"
        placeholder="Zoeken"
        aria-label="Search"
      />
    </form>

    <div class="friendlist">
      <!-- Als user een groepschat wilt aanmaken -->
      <router-link to="/creategroup">
        <div class="friend">
          <i class="fas fa-users groupIcon profilePicture"></i>
            <h5 class="username">Groep</h5>
        </div>
      </router-link>
      <!-- Als user een individuele chat wilt aanmaken wilt aanmaken -->
      <button v-for="friend in friends" :key="friend.id" @click="createChat({id: friend.id, name: friend.name})">
      <div class="friend">
        <img
          src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
          class="profilePicture"
        />
          <h5 class="username">{{ friend.name }}</h5>
      </div>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(["friends"])
  },
  mounted() {
    let _this = this
    _this.$store.commit("CLEAN_LIST")
    _this.$store.dispatch("getFriends").then(() => {
      _this.$store.dispatch("getFriendDetails")
    })
  },
  methods: {
    createChat(data) {
      this.$store.dispatch("createChat", data)
    }
  }
}
</script>

<style scoped>
.fillright {
  width: 28px;
  height: 32px;
}
form {
  margin-bottom: 18px;
}

.form-control {
  border-radius: 10px;
  border: none;
}
.header {
  font-family: "Berlin Sans";
  font-size: 30px;
  text-align: center;
  margin: 0px;
}
.top {
  margin-top: 18px;
  margin-bottom: 18px;
}
a {
  color: black;
}

.friendlist {
  overflow: auto;
  max-height: calc(100% - 121px);
}
.friend {
  margin-bottom: 5px;
  height: 45px;
  width: auto;
}
.profilePicture,
.username {
  display: inline-block;
  float: left;
}

.profilePicture,
.groupIcon {
  width: 40px;
  height: 40px;
  border: 2px solid black;
  border-radius: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: inline-block;
}

.groupIcon {
  font-size: 27px;
  background-color: black;
  color: white;
  text-align: center;
  vertical-align: middle;
}

.username {
  margin-left: 10px;
  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 40px;
  max-width: calc(100% - 50px);
  overflow: hidden;
  max-height: 40px;
  text-overflow: ellipsis;
}

.addIcon {
  bottom: 18px;
  position: absolute;
}
</style>
