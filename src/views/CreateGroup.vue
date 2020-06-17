<template>
  <div id="content">
      <div class="d-flex justify-content-between top">
        <a href="javascript:history.go(-1)">
          <i class="fas fa-arrow-left fa-2x back-btn"></i>
          </a>
        <input type="text" class="header form-control" placeholder="Geef groepsnaam...">
          <div class="fillright"></div>
      </div>
    

    <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
  <i class="fas fa-search" aria-hidden="true"></i>
  <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Zoeken"
    aria-label="Search">
</form>

    <div class="friendlist">

<!-- Als user een individuele chat wilt aanmaken wilt aanmaken -->
<a  @click="select(1)">
        <div class="friend">
          <img
            src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
            class="profilePicture"
          />
          <i class="fas fa-check checkmark" id="1" style="display:none"></i>
            <h5 class="username">Username</h5>
        </div>
</a>

<a @click="select(2)">
        <div class="friend">
          <img
            src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
            class="profilePicture"
          />
          <i class="fas fa-check checkmark" id="2" style="display:none"></i>
            <h5 class="username">Username</h5>
        </div>
</a>

    </div>
    <i class="fas fa-arrow-right fa-2x continue"></i>
  </div>
  
</template>

<script>
export default {
  methods: {
    //Function to attend/unattend festival
    select: function (id) {
      var elem = document.getElementById(id);
      if (elem.style.display == "none") elem.style.display = "block";
      else elem.style.display = "none";
    },
  },
  mounted() {},
  created() {},
};
</script>

<style scoped>
#content{
    position: initial;
}
input{
    padding: 0px 10px;
}
.checkmark{
    position: absolute;
    bottom: 0px;
    left: 20px;
    background-color: white;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    text-align: center;
    line-height: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.continue{
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
.fillright{
    width: 28px;
    height: 32px;
}
form{
    margin-bottom: 18px;
}

.form-control{
    border-radius: 10px;
    border: none;
}
.header{
    font-family: "Berlin Sans";
    font-size: 30px;
    text-align: center;
    margin: 0px;
    width: 75%;
    background: none;
    height: 40px;
}
.top{
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
    position: relative;
  margin-bottom: 5px;
  height: 45px;
  width: auto;
}
.profilePicture,
.username{
  display: inline-block;
  float: left;
}

.profilePicture, .groupIcon {
  width: 40px;
  height: 40px;
  border: 2px solid black;
  border-radius: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: inline-block;
}

.groupIcon{
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
  width: calc(100% - 50px);
  text-overflow: ellipsis;
  overflow: hidden;
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
