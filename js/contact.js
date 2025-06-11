// Toggle FAQ answers on click
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function () {
    const answer = document.getElementById('answer' + this.id.replace('question', ''));
    answer.classList.toggle('hidden');
  });
});



// Select the <a> element
const copyText = document.getElementById("copyText");

// Add event listener for the click event
copyText.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default link behavior

  // Create a temporary input element to copy the text
  const input = document.createElement("input");
  input.value = copyText.textContent; // Get the text content of the <a> element
  document.body.appendChild(input);

  // Select the text inside the input
  input.select();
  input.setSelectionRange(0, 99999); // For mobile devices

  // Execute the copy command
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(input);

  // Provide feedback to the user
  alert("Text copied to clipboard!");
});



