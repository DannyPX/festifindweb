<template>
<div id="content">
<h1 class="title">Instellingen</h1>
<h5>Algemeen</h5>
<div class="form-check">
<p>Grote tekst</p>
<label class="switch">  
  <input type="checkbox">
  <span class="slider round"></span>
</label>
</div>
<div class="form-check">
<p>Notificaties</p>
<label class="switch">  
  <input type="checkbox">
  <span class="slider round"></span>
</label>
</div>


<h5>Profiel</h5>
<div class="form-check">
<p>Wijzig profiel</p>
<p>Uitloggen</p>
</div>
</div>
</template>

<script>
</script>

<style>

.form-check p
{
    display: inline-flex;
    padding: 8px;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 42px;
  height: 26px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .6s;
  transition: .6s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 1px;
  bottom: 1px;
  background-color: white;
  -webkit-transition: .6s;
  transition: .6s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 24px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>