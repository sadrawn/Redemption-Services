(function () {
    emailjs.init("jVgjbb4-vODonWlcu"); // Your EmailJS Public Key
})();

document.getElementById("emailForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    emailjs.sendForm("service_paqy15f", "template_ehdv0m7", this)
        .then(response => {
            alert("✅ Email sent successfully!");
            document.getElementById("emailForm").reset();
        })
        .catch(error => {
            console.error("❌ Email failed to send:", error);
            alert("❌ Failed to send email. Please try again.");
        });
});