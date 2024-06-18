import state from "./state.js"; // Importa o estado do cronômetro
import * as events from "./events.js"; // Importa o registro de eventos do cronômetro
import * as timer from "./timer.js"; // Importa as funções de manipulação do tempo

// Função de inicialização do cronômetro
export function start(minutes, seconds) {
    state.minutes = minutes; // Define os minutos iniciais
    state.seconds = seconds; // Define os segundos iniciais

    timer.updateDisplay(); // Atualiza o display com o tempo inicial
    events.registerControls(); // Registra os eventos para os controles do cronômetro
}
