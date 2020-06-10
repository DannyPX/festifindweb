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
          <i class="fas fa-users groupIcon"></i>
          <div class="userinfo">
            <h5 class="username">Groep</h5>
          </div>
        </div>
      </router-link>
      <!-- Als user een individuele chat wilt aanmaken wilt aanmaken -->
      <a>
      <div class="friend">
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

<script></script>

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
.userinfo {
  display: inline-block;
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
  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 40px;
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
