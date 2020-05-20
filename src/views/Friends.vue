<template>
  <div id="content">
    <h1 class="title">Vrienden</h1>
    <div>
      <img
        src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
        class="profilePicture"
      />
      <h5 class="username">Username</h5>
      <p class="message">message</p>
      <i class="fa fa-comments"></i>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.profilePicture {
  width: 45px;
  height: 45px;
  border: 2px solid #33ff00;
  border-radius: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.username {
  font-family: Nunito;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
}

.message {
   font-family: Nunito;
font-style: normal;
font-weight: 300;
font-size: 13px;
line-height: 18px; 
}
</style>