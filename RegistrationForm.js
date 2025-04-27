const registrationForm = document.querySelector(".registrationForm");

registrationForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const names = document.querySelector("#fullName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const password = document.querySelector("#password").value.trim();
  const confirmPassword = document.querySelector("#confirmPassword").value.trim();
  const errorMessage = document.querySelector("#ErrorMessage");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10,15}$/;

  if (names === "") {
    errorMessage.textContent = "Please Enter Your Name".toUpperCase();
    errorMessage.style.color = "red";
    return;
  } else if (email === "" || !emailPattern.test(email)) {
    errorMessage.textContent = "Please Enter A Valid Email Address".toUpperCase();
    errorMessage.style.color = "red";
    return;
  } else if (phone === "" || !phonePattern.test(phone)) {
    errorMessage.textContent = "Please Enter A Valid Phone Number".toUpperCase();
    errorMessage.style.color = "red";
    return;
  } else if (password === "" || password.length < 6) {
    errorMessage.textContent = "Please Enter Your Password".toUpperCase();
    errorMessage.style.color = "red";
    return;
  } else if (confirmPassword !== password) {
    errorMessage.textContent = "Password And Confirm Password Do Not Match".toUpperCase();
    errorMessage.style.color = "red";
    return;
  }

  // Create user object
  const user = {
    names,
    email,
    phone,
    password,
  };

  // Fetch existing users from localStorage
  let allUserData = JSON.parse(localStorage.getItem("userData")) || [];

  // Check if user already exists
  const userExist = allUserData.some(existingUser => existingUser.email === email);
  
  if (userExist) {
    alert("You Are Already Registered! Please Login.");
    window.location.href = "login.html";
    return; // important to stop further execution
  }

  // Add new user to array
  allUserData.push(user);

  // Save updated array back to localStorage
  localStorage.setItem("userData", JSON.stringify(allUserData));

  alert("You Have Registered Successfully");

  // Redirect to login page
  window.location.href = "login.html";
});
