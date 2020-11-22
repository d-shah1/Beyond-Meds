var firebaseConfig = {
    apiKey: "AIzaSyBPMAkJxzpby10_EQSHUePAEBMV6Ziya8M",
    authDomain: "beyondmeds-3f826.firebaseapp.com",
    databaseURL: "https://beyondmeds-3f826.firebaseio.com",
    projectId: "beyondmeds-3f826",
    storageBucket: "beyondmeds-3f826.appspot.com",
    messagingSenderId: "447323149028",
    appId: "1:447323149028:web:56d3f91d3637305a6892f1",
    measurementId: "G-ND94MRHYDF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function()
{
    var email = $("#email").val();
    var password = $("#password").val();

    if (email != "" && password != "")
    {
        var result = firebase.auth().createUserWithEmailAndPassword(email, password);

        result.catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message: " + errorMessage);
        })
    }
    else 
    {
        window.alert("Form is incomplete. Please fill out all fields.");
    }
})