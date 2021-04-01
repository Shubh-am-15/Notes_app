function alert1() {
    alert("It is a simple to use platform were you can add, edit and delete text notes. It has a attractive layout and there is search bar to scan and filter your notes.     ");
}
function showsignup() {
    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");
    form1.style.left = "-50%";
    form2.style.left = "50%";

}
function loginshow() {
    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");
    form1.style.left = "50%";
    form2.style.left = "200%";

}
function showdetails() {
    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");
    var form3 = document.getElementById("details");
    form1.style.top = "200%";
    form3.style.top = "50%";

}
function back() {
    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");
    var form3 = document.getElementById("details");
    form1.style.top = "50%";
    form3.style.top = "-50%";

}
//signup
var signupform = document.getElementById("form2");
signupform.addEventListener("submit", (e) => {

    e.preventDefault();
    var email = document.getElementById("signupemailid");
    var password = document.getElementById("signuppassword");
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then((userCredential) => {
        console.log(userCredential)
        var user = userCredential.user;
    })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("ERROR: ", errorMessage, errorCode);
        });
    password.value = "";
    email.value = "";
});
//login
function login()
{
    var email = document.getElementById("loginid");
    var password = document.getElementById("loginpassword");
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("user signed in");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error");
            alert(`error message ${errorMessage}`);
        })
}
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      location.href="Index2.html";
    } else {
        console.log("no user found");

    }
  });