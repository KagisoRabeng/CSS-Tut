const example = document.getElementById("example")

butto.addEventListener(
    'click',
    () => {
        const newElement = document.createElement('p');
        
        newElement.textContent = "You have created a new element!";

        
        example.appendChild(newElement);
    }
)