<template>
   <form @submit.prevent="submit" ref="form" class=" col-6 offset-3 col-sm-4 offset-sm-4 mb-5 ">
  <div  >
<h4 class=" my-4"> Hello {{ firstName }}, </h4>


      <ul class="list-group ">
      <label > First Name</label>
      <li class="list-group-item list-group-item-light my-2">{{ firstName }}</li>
      <label > Last Name</label>
      <li class="list-group-item list-group-item-light my-2">{{ lastName }}</li>
      <label > Email Address</label>
      <li class="list-group-item list-group-item-light my-2">{{ emailAddress }}</li>
      <label > Password</label>
      <li class="list-group-item list-group-item-light my-2">{{ password }}</li>
    
    <div class="d-flex  justify-content-center">
        <button type="submit" @click="deleteUserAccount" class="py-2 rounded-pill btn-danger px-4 me-5">Delete Account</button>
        <!-- <button type="submit" class="  py-2 rounded-pill btn-warning  px-4  ">Change Details</button> -->
      </div>
    </ul>
  </div>
  </form>
</template>

<script  >
export default {
    props: {
      firstName: String,
      lastName: String,
      emailAddress: String,
      password: String,
      picture: String
  },
  methods: {
    
    createNewAccount (){
      this.$emit("delete-account", true);
      this.$router.push('/')
    },
}}
  
</script>

