import { controlsSounds } from "./elements.js"; // Importa os controles de som do DOM
import * as actions from "./actions.js"; // Importa as ações para controle dos sons

// Registra eventos nos botões de controle de som
export function registerSounds() {
    controlsSounds.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        if (typeof actions[action] === 'function') {
            actions[action](); // Executa a função correspondente ao botão pressionado
        }
    });
}
