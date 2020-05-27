<template>
  <div id="content">
    <div class="innercontent">
      <img
        src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
        class="profilePicture"
      />
      <h5 class="username">Dirk Willems</h5>
      <p class="bio">
        Gezellige Brabantse jongen, ik hou van alle soorten muziek
      </p>

      <div
        id="carouselExampleCaptions"
        class="carousel slide carouselslide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <!-- First Image -->
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
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
      <img class="qrCode" src="../assets/websiteQRCode_noFrame.png" />
    </div>
  </div>
</template>

<script></script>

<style scoped>
.innercontent {
  height: 100%;
  overflow: auto;
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
  margin-top: 18px;
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

.carouselslide,
.d-block {
  object-fit: cover;
  height: 300px;
}

.qrCode {
  display: block;
  width: 150px;
  height: 150px;
  margin: auto;
  border-radius: 17px;
  margin-bottom: 18px;
}
</style>
