
const form = document.querySelector("#farmerForm");
const nameInput = document.querySelector("#name");
const mobileInput = document.querySelector("#mobile");
const villageInput = document.querySelector("#village");
const cropInput = document.querySelector("#crop");
const landInput = document.querySelector("#land");
const message = document.querySelector("#message");
const farmerList = document.querySelector("#farmerList");

// Register farmer
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const mobile = mobileInput.value.trim();
  const village = villageInput.value.trim();
  const crop = cropInput.value;
  const land = Number(landInput.value);

  // Validation using if-else
  if (!name || !mobile || !village || !crop || !landInput.value.trim()) {
    message.textContent = "Please fill all fields!";
    message.style.color = "red";
  } 
  else if (!/^\d{10}$/.test(mobile)) {
    message.textContent = "Enter valid 10-digit mobile number!";
    message.style.color = "red";
  } 
  else if (land <= 0 || !Number.isFinite(land)) {
    message.textContent = "Land must be greater than zero!";
    message.style.color = "red";
  } 
  else {
    const card = document.createElement("div");
    card.className = "farmer-card";

    const details = document.createElement("p");
    details.textContent =
      `Name: ${name} | Mobile: ${mobile} | Village: ${village} | Crop: ${crop} | Land: ${land} acres`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Farmer";
    deleteBtn.className = "delete-btn";

    card.append(details, deleteBtn);
    farmerList.append(card);

    message.textContent = "Farmer registered successfully!";
    message.style.color = "#00e676";

    form.reset();
  }
});

// Delete farmer using event delegation
farmerList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();

    message.textContent = "Farmer deleted successfully!";
    message.style.color = "#ff5252";
  }
});

// Reset message
form.addEventListener("reset", function () {
  message.textContent = "";
});
