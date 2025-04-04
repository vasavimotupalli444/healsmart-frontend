// Function to Open a New Tab
function openNewTab(pageUrl) {
    window.open(pageUrl, '_blank');
}

// Symptom Analysis



// Mind-Bot Chat
function sendMessage() {
    const chatInput = document.getElementById("chat-input");
    const chatLog = document.getElementById("chat-log");
    const userMessage = chatInput.value;

    if (!userMessage) return;

    chatLog.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    chatInput.value = "";

    setTimeout(() => {
        chatLog.innerHTML += `<p><strong>Bot:</strong> I'm here to help. Please describe your symptoms.</p>`;
    }, 1000);
}

// Doctor Appointment Form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appointment-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            document.getElementById("confirmation").innerText = "Your appointment has been booked successfully!";
        });
    }
});
