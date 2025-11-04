document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");

  if (!form) {
    console.error("Booking form not found");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName")?.value;
    const email = document.getElementById("email")?.value;
    const phone = document.getElementById("phone")?.value;
    const travelPackage = document.getElementById("package")?.value;
    const travelDate = document.getElementById("travelDate")?.value;

    if (!fullName || !email || !phone || !travelPackage || !travelDate) {
      alert("Please fill in all fields.");
      return;
    }

    const bookingData = {
      fullName,
      email,
      phone,
      travelPackage,
      travelDate
    };

    console.log("Booking Submitted:", bookingData);
    alert("Booking submitted successfully!");
  });
});
