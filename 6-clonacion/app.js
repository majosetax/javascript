const contentArea =  document.querySelector("#contentArea");

console.log(contentArea);

const originalP = contentArea.querySelector("p");

console.log(originalP);

const cloneP = originalP.cloneNode(true);

contentArea.append(cloneP);

cloneP.textContent = "Texto clonado";

const list =  document.querySelector("#listArea");

console.log(list);

const itemReplace = list.children[2];

console.log(itemReplace);

itemReplace.replaceWith(cloneP);