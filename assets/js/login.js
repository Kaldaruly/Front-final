let inputUser = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let submitBtn = document.querySelector(".btn");

let user = JSON.parse(window.localStorage.getItem("userInfo"));

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  await fetch("http://localhost:8080/api/login", {
    headers: {
      "Content-Type": "application/json",
    },

    method: "POST",
    body: JSON.stringify({
      email: inputEmail.value,
      password: inputPassword.value,
    }),
  }).then((res) => {
    if (res.status) {
      if (
        user.password !== inputPassword.value || 
        user.email !== inputEmail.value
      ) {
        alert("Error can try again");
      } else {
        window.location.href = "/index.html";
      }
    }
  });
});
