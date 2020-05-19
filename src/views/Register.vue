<template>
<div id="outer">
 <form>
  <div class="form-group">
    <label for="exampleInputEmail1">E-mailaddress</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We delen je email met niemand.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Voor-en achternaam</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">Dit is hoe mensen je op Festifind zien.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Wachtwoord</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    <small id="emailHelp" class="form-text text-muted">Wachtwoord moet bestaan uit minimaal 8 tekens</small>
    <small id="emailHelp" class="form-text text-muted">en een hoofdletter.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Wachtwoord bevestigen</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Ja, ik ga akkoord met de algemene voorwaarden</label>
  </div>
  <button type="submit" class="btn btn-primary">Registreren</button>
</form>
</div>
</template>

<script>
</script>

<style>
.form-check-label{
  max-width: 180px;
}
</style>