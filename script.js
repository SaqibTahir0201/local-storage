let email = document.querySelector("#email");
let password = document.querySelector("#password");
let home_container = document.querySelector(".home-container");
let login_container = document.querySelector(".login-container");
let texting = document.querySelector("#texting");

function loginUser() {
  if (!email.value || !password.value) {
    return alert("please enter email and password");
  }
  localStorage.setItem("email", email.value);
}

function checkIsUserLogin() {
  let clutter = "";
  let email = localStorage.getItem("email");

  if (email) {
    login_container.style.display = "none";
    home_container.style.display = "block";
    clutter += ` <h1>
    welcome... you are login with ${email}
    </h1>`;
    texting.innerHTML = clutter;
  } else {
    login_container.style.display = "block";
    home_container.style.display = "none";
  }
}
function logOut() {
  localStorage.removeItem("email");
  checkIsUserLogin();
}
checkIsUserLogin();
