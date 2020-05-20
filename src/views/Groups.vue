<template>
  <div id="content">
    <h1 class="title">Groepen</h1>
    <div class="grouplist">
        
      <div class="group">
        <img
          src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
          class="groupPicture"
        />
        <div class="groupinfo">
          <h5 class="groupname">Groepsnaam</h5>
          <p class="message">Gingen jullie nog naar Awakenings?ssssssssssssssss</p>
        </div>
      </div>

    </div>
    <i class="fa fa-plus fa-2x addIcon"></i>
  </div>
</template>

<script>
</script>

<style scoped>
.grouplist {
  overflow: auto;
  max-height: calc(100% - 124px);
}
.group {
  margin-bottom: 29px;
  height: 45px;
  width: auto;
}
.groupPicture,
.groupinfo,
.chatIcon {
  display: inline;
  float: left;
}

.chatIcon {
  float: right;
}
.groupPicture {
  width: 45px;
  height: 45px;
  border: 2px solid black;
  border-radius: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: inline;
}

.groupname {
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
  max-height: 25px;
}

.groupinfo {
  margin-left: 5%;
  width: 70%;
}

.addIcon {
  bottom: 18px;
  position: absolute;
}

</style>