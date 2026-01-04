
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCRU8-l6DwTm8H89UcDvnH25KnHL1Cfz10",
  authDomain: "fir-tutorial-71faf.firebaseapp.com",
  projectId: "fir-tutorial-71faf",
  storageBucket: "fir-tutorial-71faf.appspot.com",
  messagingSenderId: "751134469722",
  appId: "1:751134469722:web:db28f9284fb13090c1b263"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const errorMsg = document.getElementById("errorMsg");


togglePassword.addEventListener("change", () => {
    password.type = togglePassword.checked ? "text" : "password";
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    errorMsg.textContent = "";

    if (email.value === "" || password.value === "") {
        errorMsg.textContent = "Please fill all fields";
        return;
    }

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            alert("Login Successful!");
            console.log(userCredential.user);
            // window.location.href = "dashboard.html"; // optional redirect
        })
        .catch((error) => {
            errorMsg.textContent = error.message;
        });
});

