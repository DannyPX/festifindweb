<template>
  <div id="content">

    <div id="header">
      <img
        src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
        class="userPicture"
      />
      <h4 class="userName">Dirk Willems</h4>
      <i class="fas fa-times fa-2x back-btn"></i>
    </div>

    <div id="messagebox">
        <div class="incoming-message">Hallo<p class="messagetime">00:00</p></div>

        <div class="outgoing-message">Helluuu<p class="messagetime">12:32</p></div>
    </div>

  <form id="chatbar">
      <input type="text" class="form-control">
      <button type="submit" class="btn btn-primary"><i class="fas fa-arrow-right send"></i></button>
  </form>
  
  </div>
</template>

<script></script>

<style scoped>
.messagetime{
    margin: 0px;
    margin-left: 10px;
    font-size: 11px;
    line-height: 35px;
    display: inline-block;
    float: right;
}
.message{
    width: 100%;
    margin-top: 12px;
}

.incoming-message, .outgoing-message{
line-height: 35px;
word-wrap:break-word;
margin-top: 12px;
padding: 0px 10px;
border-radius: 10px;
max-width: 75%;
}

.incoming-message{    
    margin-right: 32.5%;
    background-color: black;
    color: white;
    float: left;
}

.outgoing-message{
    margin-left: 32.5%;
    max-width: 75%;
    text-align: right;
    background-color: white;
    color: black;
    float: right;
}

#messagebox::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE and Edge */
#messagebox {
  -ms-overflow-style: none;
}

#messagebox{
    
    overflow:auto;
    position: relative;
    width: 100%;
    margin-top: 18px;
    height: calc(100% - 145px);
}

.send{
    font-size: 20px;
    color: white;
    line-height: 38px;
}
button{
    background-color: #065bff;
    position: absolute;
    bottom: 18px;
    right: 18px;
    width: 38px;
    padding: 0px;
    height: 38px;
    border-radius: 100%;
}
input{
    border: none;
    border-radius: 10px;
    position: absolute;
    bottom: 18px;
    width: 75%;
}
.back-btn {
  color: black;
  float: right;
}
#header {
  margin-top: 18px;
}

.userPicture {
  display: inline-block;
  height: 35px;
  width: 35px;
  border: 2px solid;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  margin-right: 10px;
}

.userName {
  font-size: 18px;
  vertical-align: middle;
  margin: 0px;
  display: inline-block;
  font-family: "Nunito Regular";
}
</style>
