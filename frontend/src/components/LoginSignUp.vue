<template>

  <div class="row ">
    <div class="col-6 offset-3 col-sm-8 offset-sm-2 ">

      <main class="form-signin w-100 m-auto  text-center">
        <form @submit.prevent="submit">
          <img class="mb-5  w-100   " src="icon-left-font-monochrome-black.svg" alt="">

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
          <button class="w-75 btn btn-lg btn-primary mb-3" type="submit">Sign in</button>

          <button class="w-75 btn btn-lg btn-success " @click="signUpRequest = true , logInRequest = false">Create New
            Account</button>
        </form>

      </main>

    </div>
  </div>
</template>


<script>
export default {

  data: () => ({


    emailAddress: "",
    password: ""

  }),
  methods: {

    submit() {

      fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          EmailAddress: this.emailAddress,
          Password: this.password
        })
      }).then((response) => {
       return response.json()

      }).then((token) => {
        console.log(token)

      })
        .catch(error => {
        console.log(error)
      })
    }


  }
}
</script>

<!-- Custom styles for this template -->
<style scoped lang="scss">
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}


/* Full-width input fields */
input[type=text],
input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: 1px solid #cdd4da;
  background: #f1f1f1;
}

/* Add a background color when the inputs get focus */
input[type=text]:focus,
input[type=password]:focus {
  background-color: white;
  outline: none;
}

/* Set a style for all buttons */
button {

  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn,
.signupbtn {
  float: left;
  width: 50%;
}
</style>


