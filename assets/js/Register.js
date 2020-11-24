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

  const auth = firebase.auth();
  const db = firebase.firestore();
  var messagesRef = firebase.database().ref('Users');
  db.settings({ timeStampsInSnapshots: true });

const signUpForm = document.querySelector('#signup-form');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signUpForm['email'].value;
    const password = signUpForm['password'].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
    })
})