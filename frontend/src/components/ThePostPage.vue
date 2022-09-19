<template>
  <div class=" col-6 offset-3 col-sm-4 offset-sm-4 mb-5 ">
    <div class="card  ">
     <header class="card-header bg-white border-0" style="height: 35px;"> 
        <div class=" d-flex  justify-content-start">
          <span class="card-text  text-muted me-1 "><small>Posted By: </small></span>     <!--   How to add the user name here -->
          
          <p class="card-text "><small id="time" class="text-muted">{{ formatedTime }}</small></p>
        </div>
      </header>
      <div class="card-body">
        <h3 class="card-title mb-4">{{ title }}</h3>

        <span class="card-text  fs-5 "> {{ body }}</span>
        <div class="mb-3">

          <ul class="nav justify-content-center shadow-none mt-5  bg-light rounded">
            <li class="nav-item  d-flex justify-content-between align-items-center">
              <a class="nav-link ">
                <font-awesome-icon icon="fa-solid fa-eye" /> Read
              </a>
              <span class="badge bg-primary rounded-pill">{{ seen }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>



<!-- <script>
  import Cookies from 'js-cookie'
  const newToken = Cookies.get('token')
export default {



  computed: {
    formatedTime() {
      const date = new Date(this.timestamp);
      return date.toLocaleDateString();
    },
  },

  methods: {
    
      fetch("http://localhost:8000/api/posts/", {
        method: "get",
        credentials: 'include',
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + newToken
        }
    
      }).then((response) => {
       return response.json()


      })
        .catch(error => {
        console.log(error)
      })
   

  }
}
</script> -->