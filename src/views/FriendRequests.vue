<template>
  <div id="content">
    <div class="friendRequests">
      <a href="/Profile">
        <div class="request">
          <img
            src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
            class="profilePicture"
          />
          <div class="userinfo">
            <h5 class="username">Username</h5>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
#content{
    height: 100%;
    background-color: #626262;
}

a {
  color: white;
}

.friendRequests {
  overflow: auto;
  max-height: calc(100% - 124px);
}
.request {
  margin-bottom: 29px;
  height: 45px;
  width: auto;
}
.profilePicture,
.userinfo{
  display: inline;
  float: left;
}

.profilePicture {
  width: 45px;
  height: 45px;
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
  line-height: 45px;
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
</style>