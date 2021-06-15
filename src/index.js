import { showMessage } from "./messager";

const messageEl = document.createElement("div");
messageEl.textContent = "I was put here by JavaScript! Hola";
document.body.appendChild(messageEl);

showMessage("Somebody else did this work!");
