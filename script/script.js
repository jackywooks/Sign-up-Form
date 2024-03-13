const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");

confirmPasswordInput.addEventListener("keyup", checkValidity);

passwordInput.addEventListener("keyup", checkValidity);

function checkValidity() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordInput.setCustomValidity(
      "Confirm Password Must be same with Password"
    );
    confirmPasswordInput.setCustomValidity(
      "Confirm Password Must be same with Password"
    );
  } else {
    passwordInput.setCustomValidity("");
    confirmPasswordInput.setCustomValidity("");
  }
}
