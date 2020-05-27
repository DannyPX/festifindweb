<template>
  <div id="content">
    <div class="innercontent">
      <div class="d-flex justify-content-between top">
          <a href="javascript:history.go(-1)">
        <i class="fas fa-arrow-left fa-3x back-btn"></i>
        </a>
        <img
          src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
          class="profilePicture"
        />
        <a @click="change">
          <i class="fas fa-user-plus fa-3x friendIcon" id="friendIcon"></i>
        </a>
      </div>

      <h5 class="username">Dirk Willems</h5>
      <p class="bio">Gezellige Brabantse jongen, ik hou van alle soorten muziek</p>

      <div id="carouselExampleCaptions" class="carousel slide carouselslide" data-ride="carousel">
        <ol class="carousel-indicators">
          <!-- First Image -->
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <!-- Other Images -->
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        </ol>
        <!-- First Image -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
              class="d-block w-100"
            />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <!-- Other Images -->
          <div class="carousel-item">
            <img
              src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
              class="d-block w-100"
            />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <h6 class="heading">Aanwezig bij:</h6>

      <div class="festivals">
        <div class="festival card">
          <img class="card-img-top" src="../assets/maxresdefault.jpg" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title festivalTitle">Awakenings Festival 2020</h5>
          </div>
        </div>
        <div class="festival card">
          <img class="card-img-top" src="../assets/maxresdefault.jpg" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title festivalTitle">Awakenings Festival 2020</h5>
          </div>
        </div>
        <div class="festival card">
          <img class="card-img-top" src="../assets/maxresdefault.jpg" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title festivalTitle">Awakenings Festival 2020</h5>
          </div>
        </div>
        <div class="festival card">
          <img class="card-img-top" src="../assets/maxresdefault.jpg" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title festivalTitle">Awakenings Festival 2020</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    //Function to attend/unattend festival
    change: function() {
      var elem = document.getElementById("friendIcon");
      if (elem.className == "fas fa-user-plus fa-3x friendIcon")
        elem.className = "fas fa-user-check fa-3x friendIcon";
      else elem.className = "fas fa-user-plus fa-3x friendIcon";
    }
  },
  mounted() {},
  created() {}
};
</script>

<style scoped>
.friendIcon{
  font-size: 36px;
}
.top {
  margin-top: 18px;
}
.heading {
  font-family: "Nunito Regular";
  font-size: 18px;
}
.innercontent {
  height: 100%;
  overflow: auto;
}
.back-btn
{
  width: 45px;
    font-size: 36px;
    color: black;
}
.innercontent::-webkit-scrollbar {
  display: none;
}

.profilePicture {
  display: block;
  width: 100px;
  height: 100px;
  border: 2px solid white;
  border-radius: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: auto;
  margin-bottom: 20px;
}

.username {
  font-family: "Berlin Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 26px;
  text-align: center;
}

.bio {
  overflow-wrap: break-word;
  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-align: center;
}

.carouselslide {
  margin-bottom: 20px;
}

.carouselslide, .d-block{
    object-fit: cover;
    height: 300px;
}

.card {
  height: 115px;
  width: 115px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: inline-block;
  margin-right: 10px;
}

.card-img-top {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.card-body {
  padding: 5px;
  height: auto;
  white-space:normal;
}

.festivalTitle {
  font-family: "Nunito Regular";
  text-align: center;
  font-size: 16px;
}

.festivals {
    margin-bottom: 3px;
    height: 130px;
    white-space: nowrap;
  overflow: auto;
}

a{
    color: black;
}
</style>
