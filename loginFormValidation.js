// UTILITY FUNCTIONS
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

// DECLARING VARIABLES OF THE FORM USING UTILITY FUNCTIONS
let 
  username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form");
  signIn = id("sign-in");
  signUp = id("sign-up");
  signInBtn= id("btn-sign-in")
let
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

// PLUS ALL SUCCESS AND FAILURE VALIDATION ICONS...
const validationIcons = document.querySelectorAll(".validation-icon");
  
// FORM EVENT LISTENER
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
  })

// VALIDATION FUNCTION
let engine = function(id, serial, message) {
    if(id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }
    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
      }
}

// SIGN IN
signIn.addEventListener("click", function() {
  form.innerHTML = 
    `
          <div class="social">

                <div class="form-title">Sign In</div>

                <div><h4>Dont have account yet? <a href="login.html"><span id="sign-up">Sign Up</span></a></h4></div>

                <div><p><b>Or</b></p></div>

                    <div class="social-media">
                        <div class="btn-1" title="Sign in with your Google account">
                        <img src="Google logo.png"/>
                        Sign In
                        </div>
                        
                        <div class="btn-2" title="Sign in with your Facebook account">
                        <img src="FB logo.png"/>
                        Sign In
                        </div>
                    </div>
                    
                </div>

            </div>

                <!-- USERNAME -------------------------------------------------->
                 
                    <div>
                        <label for="username"><i class="fa-regular fa-user"></i> User Name</label>
                        
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Brad Pitt"
                        />

                        <div></div>
                        
                    </div>
                
                <!-- PASSWORD --------------------------------------------------->
                
                    <div>
                        <label for="password"><i class="fa-solid fa-key"></i> Your password</label>
                        
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password here"
                        />

                        <div></div>
                                              
                    </div>

                <!-- SUBMIT ----------------------------------------------------->
                <button id="btn-sign-in" type="submit">Sign In</button>
    `
})

// ADDING ALERT TO A SIGN IN BUTTON
form.addEventListener("click", function(e) {
  if (e.target.id === "btn-sign-in") {
      alert("System Failure 👽");
  }
});