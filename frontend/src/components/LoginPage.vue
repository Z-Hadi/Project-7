<template >

  <div class="row ">
    <div class="col-6 offset-3 col-sm-8 offset-sm-2 ">

      <main class="form-signin w-100 m-auto  text-center">
        <form @submit.prevent="submit">
          <img class="mb-5  w-100" src="icon-left-font-monochrome-black.svg" alt="">

          <h4 class="h4 mb-4 fw-normal">Please sign in</h4>
          <div>
            <div class="form-floating">
              <input type="email" class="form-control" v-model="emailAddress" id="floatingInput"
                placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" v-model="password" id="floatingPassword"
                placeholder="Password">
              <label st for="floatingPassword">Password</label>
            </div>
          </div>
          <div class="checkbox mb-3">

          </div>
          <button class="w-75 btn btn-lg btn-primary mb-3" type="submit" @click="logInRequest = true , signUpRequest = false">Sign in</button>
          <button class="w-75 btn btn-lg btn-success "  @click="createNewAccount">Create New Account</button>
        
        </form>

      </main>

    </div>
  </div>
</template>


<script>
  import Cookies from 'js-cookie'

export default {

  data: () => ({
  

    emailAddress: "",
    password: ""

  }),
  methods: {
    
    createNewAccount (){
      this.$emit("create-new", true);
      

    },



    submit() {

      fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailAddress: this.emailAddress,
          password: this.password
        })
      }).then((response) => {
      
       return response.json()

      }).then((token) => {
        Cookies.set('token', token.token)
        Cookies.set('userId', token.userId)
        console.log(token)

      })
        .catch(error => {
        console.log(error)
      })
      this.$router.push('/')
    }


  }
}
</script>





