import * as events from "./events.js"; // Importa os eventos do módulo de música

// Inicia o registro de eventos para os botões de controle de som
export function startMusic() {
    events.registerSounds();
}
