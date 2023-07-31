

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCJ-tAC4zF1oX-Ew-oidjrvs171w7MQlf0",
    authDomain: "cook-book-82b5e.firebaseapp.com",
    databaseURL: "https://cook-book-82b5e-default-rtdb.firebaseio.com",
    projectId: "cook-book-82b5e",
    storageBucket: "cook-book-82b5e.appspot.com",
    messagingSenderId: "775511724331",
    appId: "1:775511724331:web:c006966e3112c96343756e"
  };


  // Initialize Firebase
const firebase=initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = firebase.database();
const auth = firebase.auth()
//   const database = firebase.database()
  
  // Set up our register function
  function register () {
    // Get all our input fields
   let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let full_name = document.getElementById('full_name').value
    
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
    if (validate_field(full_name) == false || validate_field(favourite_song) == false || validate_field(milk_before_cereal) == false) {
      alert('One or More Extra Fields is Outta Line!!')
      return
    }
   
    // // Move on with Auth
    // auth.createUserWithEmailAndPassword(email, password)
    // .then(function() {
    //   // Declare user variable
    //   var user = auth.currentUser

      firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
  
      // Add this user to Firebase Database
    //   var database_ref = database.ref()
  
    //   // Create User data
    //   var user_data = {
    //     email : email,
    //     full_name : full_name,
    //     favourite_song : favourite_song,
    //     milk_before_cereal : milk_before_cereal,
    //     last_login : Date.now()
    //   }
    let userId=full_name;
    firebase.database().ref('users/' + userId).set({
        username: full_name,
        email: email,
        // profile_picture : imageUrl
      });
  
      // Push to Firebase Database
    //   database_ref.child('users/' + user.uid).set(user_data)
  
      // DOne
      alert('User Created!!')
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
  
      // DOne
      alert('User Logged In!!')
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }