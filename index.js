 const form = document.getElementById("myForm");
 const formMessage = document.getElementById("formMessage");

 form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if(!email || !name) {
        formMessage.textContent = "Fill in the missing part(s)";
        return;
    };

    console.log(`Name: ${name}, Email: ${email}`)
    formMessage.textContent = "Form Submitted Successfully!";

    window.location.href = './profile.html';
 });

