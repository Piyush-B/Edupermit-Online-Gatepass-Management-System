function login(formNumber) {
  const username = document.getElementById(`username${formNumber}`).value;
  const password = document.getElementById(`password${formNumber}`).value;
  const message = document.getElementById(`message${formNumber}`);

  // Check if username and password are correct
  if (username === "user" && password === "pass") {
    message.textContent = `Login successful for Form ${formNumber}`;
    message.style.color = "green";
  } else {
    message.textContent = `Incorrect username or password for Form ${formNumber}`;
    message.style.color = "red";
  }
}