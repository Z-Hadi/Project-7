<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="/"
        ><img
          class="img-fluid"
          style="width: 200px"
          src="../assets/images/icon-left-font-monochrome-black.svg"
          alt="Groupomania Log"
      /></a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="/#/Account">Account</a>
          </li>
     
          <li class="nav-item">
           
            <button @click="sign" class="btn">Log Out</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>



<script>
import Cookies from "js-cookie";
export default {

 methods: {
   
  sign() {

    Cookies.remove('token');
    localStorage.clear('user');
    this.$router.push("/LoginSignUp");
    console.log(Cookies)
    }

        }}



</script> 










<style lang="scss">
#nav .NavBar-Active-Link {
  color: red;
}
</style>
