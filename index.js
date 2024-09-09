const example = document.getElementById("eg")

button.addEventListener('click', () => {
   const message = document.createElement('p');
    message.textContent = "Boop!"
    example.appendChild(message)
}) 