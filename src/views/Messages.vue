<template>
  <div id="content">
    <h1 class="title">Berichten</h1>
    <div class="chatlist">
      <router-link v-for="chat in chats" :key="chat.id" :to="`/chat/${chat.id}`">
        <div class="chat">
          <img
            src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
            class="profilePicture"
          />
          <div class="chatinfo">
            <h5 class="chatname">{{ chat.name }}</h5>
            <p v-if="chat.messages.length != 0" class="message">{{ chat.message[0].text }}</p>
            <p v-else class="message">Test</p>
          </div>
          <i class="far fa-comment-dots fa-3x chatIcon"></i>
        </div>
      </router-link>
    </div>
    <router-link to="/createchat">
    <i class="fa fa-plus fa-2x addIcon"></i>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(["chats"])
  },
  mounted() {
    this.$store.dispatch("getChats")
  }
}
</script>

<style scoped>
a {
  color: black;
}

.chatlist {
  overflow: auto;
  max-height: calc(100% - 124px);
}
.chat {
  margin-bottom: 29px;
  height: 45px;
  width: auto;
}
.profilePicture,
.chatinfo,
.chatIcon {
  display: inline;
  float: left;
  
}

.chatIcon {
  float: right;
}
.profilePicture {
  width: 45px;
  height: 45px;
  border: 2px solid black;
  border-radius: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: inline-block;
}

.chatname {
  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
}

.message {
  margin-top: -5px;
  font-family: "Nunito Regular";
  font-style: normal;
  font-size: 13px;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 90%;
  max-height: 25px;
}

.chatinfo {
  margin-left: 5%;
  width: 60%;
}

.addIcon {
  position: absolute;
    bottom: 18px;
    right: 18px;
    background-color: white;
    border-radius: 100%;
    text-align: center;
    line-height: 40px;
    height: 40px;
    width: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>

