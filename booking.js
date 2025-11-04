document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  const successMsg = document.getElementById("successMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop page reload

      // Optionally collect form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const packageSelected = document.getElementById("package").value;
      const date = document.getElementById("date").value;

      // Display success message
      successMsg.style.display = "block";
      successMsg.textContent = `✅ Booking successful for ${name}! 
      Package: ${packageSelected} on ${date}. Confirmation sent to ${email}.`;

      // Optionally clear the form
      form.reset();
    });
  } else {
    console.error("Booking form not found!");
  }
});
