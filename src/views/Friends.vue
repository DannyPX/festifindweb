<template>
  <div id="content">
    <h1 class="title">Vrienden</h1>

    <div class="friendlist">
      <a href="/Profile">
        <div class="friend" v-for="i in 20" :key="i">
          <img
            src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
            class="profilePicture"
          />
        <div class="requestContent">
          <h5 class="username">Dirk Willems</h5>
          <br>
          <button class="btn btn-primary">Bevestigen</button>
          <button class="btn btn-light">Verwijderen</button>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.title{
  margin-bottom: 30px;
}
.btn{
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

.btn-light{
  background: white;
  color: #065bff;
}

.requestContent{
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
