import { controls } from "./elements.js";
import * as actions from "./actions.js";

// Registra eventos para os controles do cronômetro
export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        if (typeof actions[action] === 'function') {
            actions[action](); // Chama a ação correspondente ao data-action do elemento clicado
        }
    });
}
