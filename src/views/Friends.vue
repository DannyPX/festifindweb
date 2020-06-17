<template>
  <div id="content">
    <h1 class="title">Vrienden</h1>

    <div class="friendlist">
      <a v-for="friend in friends" :key="friend.id">
        <div class="friend">
          <img src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png" class="profilePicture" />
          <div class="requestContent">
            <h5 class="username">{{ friend.name }}</h5>
            <br>
            <p><i>Is je vriend</i></p>
          </div>
        </div>
      </a>
      <a>
        <div class="friend">
          <img src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png" class="profilePicture" />
          <div class="requestContent">
            <h5 class="username">Jim S.</h5>
            <br>
            <button class="btn btn-primary">Bevestigen</button>
            <button class="btn btn-light">Verwijderen</button>
          </div>
        </div>
      </a>
      <a >
        <div class="friend">
          <img src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png" class="profilePicture" />
          <div class="requestContent">
            <h5 class="username">Matthijs v. S.</h5>
            <br>
            <p><i>Verzoek verstuurd</i></p>
          </div>
        </div>
      </a>
        <!-- <div class="friend" v-for="i in 20" :key="i">
          <img src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png" class="profilePicture" />
          <div class="requestContent">
            <h5 class="username">Dirk Willems</h5>
            <br>
            <button class="btn btn-primary">Bevestigen</button>
            <button class="btn btn-light">Verwijderen</button>
          </div>
        </div> -->

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(["friends", "incoming", "outgoing"])
  },
  mounted() {
    let _this = this
    _this.$store.commit("CLEAN_LIST")
    _this.$store.dispatch("getFriends").then(() => {
      _this.$store.dispatch("getFriendDetails")
    })
    _this.$store.dispatch("getIncomingRequests").then(() => {
      _this.$store.dispatch("getIncomingDetails")
    })
    _this.$store.dispatch("getOutgoingRequests").then(() => {
      _this.$store.dispatch("getOutgoingDetails")
    })
  },
  }
</script>

<style scoped>
  .title {
    margin-bottom: 30px;
  }

  .btn {
    margin-right: 5px;
    display: inline-block;
    text-align: center;
    background: #065bff;
    border-radius: 10px;

    font-family: "Nunito Regular";
    font-style: normal;
    font-weight: normal;
    align-items: center;
    text-align: center;

    color: #ffffff;
  }

  .btn-light {
    background: white;
    color: #065bff;
  }

  .requestContent {
    display: inline;
    margin-left: 20px;
    float: left;
  }

  a {
    color: black;
  }

  .friendlist {
    overflow: auto;
    max-height: calc(100% - 84px);
  }

  .friend {
    margin-bottom: 40px;
    height: 45px;
    width: auto;
    vertical-align: middle;
  }

  .profilePicture,
  .username {
    display: inline;
    float: left;
  }

  .profilePicture {
    width: 55px;
    height: 55px;
    border: 2px solid white;
    border-radius: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: inline-block;
  }

  .username {
    font-family: "Nunito Regular";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 15px;

  }
</style>
