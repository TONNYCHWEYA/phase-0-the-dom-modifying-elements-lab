const main = document.querySelector("main");
main.remove();
const newHeader = document.createElement("h1")
newHeader.id = "victory";
document.body.append(newHeader);
newHeader.innerHTML = "Tonny is the champion";
