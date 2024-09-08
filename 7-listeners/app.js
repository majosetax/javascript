const container = document.querySelector(".container");

const button = document.querySelector("button");

container.addEventListener("mouseover", () => {
    container.style.backgroundColor = "blue";
});

container.addEventListener("mouseout", () => {
    container.style.backgroundColor = "red";
});

// button.addEventListener("click", () => {
//     alert("Boton presionado");
// });

const buttonClickCallback = () => {
    alert("boton clickeado");
};

button.addEventListener("click", buttonClickCallback);

setTimeout(() => {

    button.removeEventListener("click", buttonClickCallback);

},2000);

const buttonlicked = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.textContent);
};

button.addEventListener("click",buttonlicked);

const form =  document.getElementById("myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name =  form.elements["name"].value;
    console.log(name);
});