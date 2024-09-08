const newPElement =  document.createElement("p");

console.log(newPElement);

newPElement.textContent = "Fui creado con createElement";

const contentArea =  document.getElementById("contentArea");

console.log(contentArea);

contentArea.append(newPElement);

const newItem = document.createElement("li");

newItem.textContent = "Articulo 5";

const listArea =  document.getElementById("listArea");

console.log(listArea);

listArea.prepend(newItem);

const firstItem =  document.querySelector("li");

console.log(firstItem);

firstItem.remove();

const list = document.querySelector("ul");

console.log(list);

list.removeChild(list.firstElementChild);