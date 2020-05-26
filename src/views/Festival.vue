<template>
  <div id="content">
    <img class="festivalImage" src="../assets/maxresdefault.jpg" />
    <h3 class="festivalName">Awakenings Festival 2020</h3>
    <button class="btn">Tickets</button>
    <button class="btn btn2">Ik ga</button>
    <h6 class="heading">12 vrienden gaan ></h6>
    <img
      src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
      class="profilePicture"
    />
    <img
      src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
      class="profilePicture"
    />
    <img
      src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
      class="profilePicture"
    />
    <img
      src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
      class="profilePicture"
    />
    <img
      src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
      class="profilePicture"
    />
    <img
      src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
      class="profilePicture"
    />
    <img
      src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
      class="profilePicture"
    />
    <img
      src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
      class="profilePicture"
    />
    <img
      src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
      class="profilePicture"
    />
    <!-- More than 10 friends: show the first 9 and the counter underneath -->
    <div class="maxFriends">
      <p class="maxFriendsCounter">+12</p>
    </div>
    <h6 class="heading">Info</h6>
    <div><i class="fas fa-calendar"></i><p class="info">12 apr. 2020 - 13 apr. 2020</p></div>
    <div><i class="fas fa-clock"></i><p class="info">12.00 - 02.00</p></div>
    <div><i class="fas fa-map-marker-alt"></i>
    <a target="_blank" href="https://www.google.nl/maps/place/Herengracht+433,+1017+BR+Amsterdam" class="info">Herengracht 433, 1017 BR Amsterdam</a></div>
     
    
  </div>
</template>

<script>
</script>

<style scoped>
.festivalImage {
  margin-top: 18px;
  width: 100%;
  height: 315px;
  object-fit: cover;
  border-radius: 10px;
}

.festivalName {
  margin-top: 18px;
  margin-bottom: 18px;
  font-family: Berlin Sans FB;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 26px;
  align-items: center;
  text-align: center;
}

.btn {
  display: inline;
  width: 120px;
  height: 45px;
  text-align: center;
  background: #065bff;
  border-radius: 10px;

  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 29px;
  align-items: center;
  text-align: center;

  color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.btn2 {
  float: right;
  background: white;
  color: #065bff;
}

h6 {
  margin-top: 18px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  align-items: center;
}

.profilePicture {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right: -10px;
}

.maxFriends {
  background: white;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: inline-block;
  justify-content: center;
  align-items: center;
  line-height: 36px;
  border: 2px solid white;
}

.maxFriendsCounter {
  margin: auto;
  width: 100%;
  text-align: center;
}

.info{
    margin-left: 5px;
display: inline;
font-family: Nunito;
font-style: normal;
font-weight: normal;
}

i{
    width: 16px;
}

a{
    color: black;
}
</style>