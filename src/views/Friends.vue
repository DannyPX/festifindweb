<template>
  <div id="content">
    <h1 class="title">Vrienden</h1>
    <div class="friendlist">
        
      <div class="friend">
        <img
          src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
          class="profilePicture"
        />
        <div class="userinfo">
          <h5 class="username">Username</h5>
          <p class="message">Ging jij nog naar Awakenings?</p>
        </div>
        <i class="far fa-comment-dots fa-3x chatIcon"></i>
      </div>

    </div>
    <i class="fa fa-plus fa-2x addIcon"></i>
  </div>
</template>

<script>
</script>

<style scoped>
.friendlist {
  overflow: auto;
  max-height: calc(100% - 124px);
}
.friend {
  margin-bottom: 29px;
  height: 45px;
  width: auto;
}
.profilePicture,
.userinfo,
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

.username {
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

.userinfo {
  margin-left: 5%;
  width: 60%;
}

.addIcon {
  bottom: 18px;
  position: absolute;
}

</style>