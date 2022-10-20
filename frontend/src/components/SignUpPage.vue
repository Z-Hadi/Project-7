<template>
  <form
    @submit.prevent="submit"
    ref="form"
    class="col-6 offset-3 col-sm-6 offset-sm-3"
  >
    <div class="container bg-white">
      <h1>Sign Up</h1>
      <p class="mb-5">Please fill in this form to create an account.</p>

      <label for="firstname"><b>First Name</b></label>
      <input
        type="text"
        placeholder="Enter First Name"
        name="firstname"
        minlength="2"
        maxlength="20"
        v-model="firstName"
        required
      />

      <label for="lastname"><b>Last Name</b></label>
      <input
        type="text"
        placeholder="Enter Last Name"
        name="lastname"
        minlength="2"
        maxlength="20"
        v-model="lastName"
        required
      />

      <label for="email"><b>Email Address</b></label>
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        v-model="emailAddress"
        required
      />

      <label for="psw"><b>Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        v-model="password"
        minlength="8"
        maxlength="20"
        required
      />

      <div class="clearfix">
        <button type="button" class="cancelbtn">Cancel</button>
        <button type="submit" class="signupbtn btn-success">Sign Up</button>

        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-lg btn-primary mb-3" @click="logInRequest">
            Sign in
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  }),
  methods: {
    logInRequest() {
      this.$emit("sign-in", true);
    },

    submit() {
      fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          emailAddress: this.emailAddress,
          password: this.password,
        }),
      })
      .then((response) => {
          // console.log(response)
          if(response.ok ) {return response.json();}
         throw(response) 
        })
        .then((response) => {
          
          this.firstName = "";
          this.lastName = "";
          this.emailAddress = "";
          this.password = "";
          this.$router.push("/");
          return response.json();
        })
    

        .catch((error) => {
          this.$emit("error", error.statusText); // test by making faulty loging
          // console.log(error);
        });
    },
  },
};
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
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: 1px solid #cdd4da;
  background: #f1f1f1;
}

/* Add a background color when the inputs get focus */
input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  background: rgb(255, 255, 255);
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
