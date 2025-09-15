document.addEventListener("DOMContentLoaded", () => {
  // 🌙 Dark Mode Toggle
  const themeButton = document.getElementById("theme-button");
  if (themeButton) {
    themeButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // 📝 RSVP Form Handling
  const rsvpForm = document.getElementById("rsvp-form");
  const rsvpButton = document.getElementById("rsvp-submit");

  if (rsvpForm && rsvpButton) {
    rsvpButton.addEventListener("click", (event) => {
      event.preventDefault();

      // Get input values
      const nameInput = rsvpForm.querySelector("#name");
      const hometownInput = rsvpForm.querySelector("#hometown");
      const emailInput = rsvpForm.querySelector("#email");

      // Create participant object
      const person = {
        name: nameInput.value.trim(),
        hometown: hometownInput.value.trim(),
        email: emailInput.value.trim(),
      };

      // Validate inputs
      let inputs = [nameInput, hometownInput, emailInput];
      let containsErrors = false;

      inputs.forEach((input) => {
        if (input.value.trim().length < 2) {
          containsErrors = true;
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      });

      // If valid, add to list and show modal
      if (!containsErrors) {
        addParticipant(person);
        toggleModal(person);

        // Clear form
        inputs.forEach((input) => (input.value = ""));
      }
    });
  }

  // ➕ Add participant to list
  const addParticipant = (person) => {
    const participantList = document.getElementById("participant-list");
    const newItem = document.createElement("li");
    newItem.textContent = `${person.name} from ${person.hometown} (${person.email})`;
    participantList.appendChild(newItem);
  };

  // 🎉 Show thank you modal
  const toggleModal = (person) => {
    const modal = document.getElementById("thanks-modal");
    const modalText = document.getElementById("thanks-content-modal");
    const modalImage = document.getElementById("modal-image");

    if (modal && modalText && modalImage) {
      modal.style.display = "flex";
      modalText.textContent = `Thanks for RSVPing, ${person.name}! We're excited to have someone from ${person.hometown} join us. We'll reach out to you at ${person.email} soon!`;

      // Animate image every 500ms
      let intervalId = setInterval(() => animateImage(modalImage), 500);

      // Hide modal after 5 seconds
      setTimeout(() => {
        modal.style.display = "none";
        clearInterval(intervalId);
      }, 5000);
    }
  };

  // 🌀 Simple modal image animation
  let rotateFactor = 0;
  const animateImage = (img) => {
    rotateFactor = rotateFactor === 0 ? -10 : 0;
    img.style.transform = `rotate(${rotateFactor}deg)`;
  };
});
