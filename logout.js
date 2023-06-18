
const firebaseConfig = {
  apiKey: "AIzaSyDMiwLIRA67yAZaPKGqKvlivQP_JasOG30",
  authDomain: "learn-auth-2ef8e.firebaseapp.com",
  projectId: "learn-auth-2ef8e",
  storageBucket: "learn-auth-2ef8e.appspot.com",
  messagingSenderId: "170163396211",
  appId: "1:170163396211:web:61551dd3c488e7f85b5406"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

auth.onAuthStateChanged(function (user){
  if (user){
    var email = user.email;
    var user = document.getElementById("user");
    var text = document.createTextNode("karagirl@gmail.com");
    user.appendChild(text);
    console.log(user);
    // console.log(user.name);
  }
})


//logout/ function/

let signOutButton = document.getElementById("signout");
signOutButton.addEventListener("click", (e) =>{
  e.preventDefault();
  console.log("logout cliked");
  auth.signOut();
  alert("Log out");
  window.location = "index.html";
});
