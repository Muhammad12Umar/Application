let loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email pattern
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const errorMessage = document.querySelector("#ErrorMessage");
  const getData = JSON.parse(localStorage.getItem("userData")) || [];

  // check email
  if (email === "" || !emailPattern.test(email)) {
    errorMessage.textContent = "Please Enter A Valid Email Address".toUpperCase();
    errorMessage.style.color = "red";
    return;
  }
  // check password
  else if (password === "" || password.length < 6) {
    errorMessage.textContent = "Please Enter Your Password".toUpperCase();
    errorMessage.style.color = "red";
    return;
  } 

  // Find user with matching email and password
  const foundUser = getData.find(user => user.email === email && user.password === password);

  if (foundUser) {
    alert("You Have Logged In Successfully!");
    window.location.href = "Home.html"; // redirect
  } else {
    errorMessage.textContent = "Invalid Email Or Password. Please Register First!";
    errorMessage.style.color = "red";
  }
});
