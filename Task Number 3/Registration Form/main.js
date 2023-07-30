const registrationForm = document.getElementById("registrationForm");
const displayedData = document.getElementById("displayedData");
const displayDataDiv = document.getElementById("displayData");

let userData = []; // Array to store the entered data

registrationForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = registrationForm.name.value;
  const email = registrationForm.email.value;
  const phone = registrationForm.phone.value;

  // Push the entered data as an object into the array
  userData.push({ name, email, phone });

  displayData();
});

function displayData() {
  displayedData.innerHTML = ""; // Clear previous data

  // Loop through the array and display all the entered data
  userData.forEach((data, index) => {
    const dataDiv = document.createElement("div");
    dataDiv.classList.add("data-item");
    dataDiv.innerHTML = `
      <h2>Entry ${index + 1}:</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
    `;
    displayedData.appendChild(dataDiv);
  });

  displayDataDiv.style.display = "block";
}
