<template>
  <div class=" col-6 offset-3 col-sm-4 offset-sm-4 mb-5 " >
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
      <label > Picture</label>
      <li class="list-group-item list-group-item-light my-2 vh-4">{{ picture }}</li>
    <div class="d-flex  justify-content-center">
        <button type="submit"  class="  py-2 rounded-pill btn-danger px-4 me-5">Delete Account</button>
        <button type="submit" class="  py-2 rounded-pill btn-warning  px-4  ">Change Details</button>
      </div>
    </ul>
  </div>
</template>

<script  >
export default {
    props: {
      firstName: String,
      lastName: String,
      emailAddress: String,
      password: String,
      picture: String
  }
}
  
</script>

