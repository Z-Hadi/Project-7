
<template>
    <form class="col-6 offset-3 col-sm-6 offset-sm-3 ">
      <div class="container bg-white">
        <h1>Sign Up</h1>
        <p class="mb-5">Please fill in this form to create an account.</p>

        <label for="email"><b>First Name</b></label>
        <input type="text" placeholder="Enter First Name" name="firstname" required>

        <label for="email"><b>Last Name</b></label>
        <input type="text" placeholder="Enter Last Name" name="lastname" required>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required>


        <label for="psw-repeat"><b>Please Choose a profile picture</b></label>

        <input class="form-control bg-white" type="file" ref="image" @change="createPreview" />
        <img id="imageId" :src="previewImage" class="w-75 mt-3" />

        <div class="clearfix">
          <button type="button" class="cancelbtn">Cancel</button>
          <button type="submit" class="signupbtn btn-success ">Sign Up</button>

        <div class="d-grid gap-2 col-6 mx-auto">
          <button class=" btn btn-lg btn-primary mb-3 " type="submit" @click="logInRequest = true , signUpRequest = false">Sign in</button>
          </div>
        </div>
      </div>
    </form>



</template>


<script>
  export default {

    
    data: () => ({
  
      previewImage: "",
      logInRequest: true ,
      signUpRequest: false,
       firstName: "",
        lastName: "",
        emailAddress: "",
        password: ""
  
    }),
    methods: {
      createPreview() {
        this.previewImage = URL.createObjectURL(this.$refs.image.files[0]);
      },
       submit() {
            const account ={
                       
      }
       this.$emit("create", account);
        this.firstName=""
        this.lastName=""
        this.emailAddress=""
        this.password=""
       
  
    }
  }}
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


