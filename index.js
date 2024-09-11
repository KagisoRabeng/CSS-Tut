 const form = document.getElementById("myForm");
 const formMessage = document.getElementById("formMessage");

 form.addEventListener('submit', (event) => {
    event.preventDefault(); //Prevents the form from throwing an error after submission

    const name = document.getElementById("name").value; //Value returns or gets an input value
    const email = document.getElementById("email").value;

    formMessage.textContent = "Form Submitted Successfully!"; //textContent is similar to innerHTML

    window.location.href = 'mainPage.html';
 });

 