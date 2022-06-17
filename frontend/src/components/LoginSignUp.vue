<template>
<div class="container ">
  <div class="row ">
    <div class="col-6 offset-3 col-sm-4 offset-sm-4">

        <main class="form-signin w-100 m-auto  text-center">
          <form>
            <img class="mb-6  w-100   " src="icon-left-font-monochrome-black.svg" alt="" >
            
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label st  for="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
              
            </div>
            <button class="w-100 btn btn-lg btn-primary mb-5" type="submit">Sign in</button>
            
            <button class="w-85 btn btn-lg btn-success " onclick="document.getElementById('modalID').style.display='block'" style="width:auto;">Create New Account</button>
          </form>
          
        </main>

      </div>
    </div>
  </div>



<div id="modalID" class="modal">
  <span onclick="document.getElementById('modalID').style.display='none'" class="close" title="Close Modal">&times;</span>
  <form class="modal-content" action="/action_page.php">
    <div class="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
      <label for="email"><b>First Name</b></label>
      <input type="text" placeholder="Enter First Name" name="firstname" required>
      
      <label for="email"><b>Last Name</b></label>
      <input type="text" placeholder="Enter Last Name" name="firstname" required>

      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

<div class="clearfix">
        <button type="button" onclick="document.getElementById('modalID').style.display='none'" class="cancelbtn">Cancel</button>
        <button type="submit" class="signupbtn btn-success ">Sign Up</button>
      </div>
    </div>
  </form>
</div>

</template>

<script>
export default {
  name: 'LoginSignup',
  props: {
    msg: String
  }
}

// Get the modal
var modal = document.getElementById('modalID');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


</script>

<!-- Custom styles for this template -->
<style scoped lang="scss">

.form-signin {
  max-width: 100%;
  padding: 50px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

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

.mb-6{
  margin-bottom: 30%;
}


/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: 1px solid #cdd4da;
  background: #f1f1f1;
}

/* Add a background color when the inputs get focus */
input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
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
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}


/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #474e5d;
  padding-top: 40px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 70%; /* Could be more or less, depending on screen size */
  padding: 40px 0 40px 0;
}

/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
 
/* The Close Button (x) */
.close {
  position: absolute;
  right: 80px;
  top: 15px;
  font-size: 60px;
  font-weight: bold;
  color: #f1f1f1;
}

.close:hover,
.close:focus {
  color: #f44336;
  cursor: pointer;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}

</style>


