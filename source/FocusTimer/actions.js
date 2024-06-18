import state from "./state.js";
import { updateDisplay, countdown } from "./timer.js";  // Adicionando a importação da função countdown

// Função para alternar o estado de execução do cronômetro
export function toggleRunning() {
    if (state.isRunning) {
        state.isRunning = false;
        document.documentElement.classList.remove('running');
        clearTimeout(state.countdownId);  // Garanta que o timeout é limpo ao parar
    } else {
        state.isRunning = true;
        document.documentElement.classList.add('running');
        countdown();  // Inicia a contagem regressiva
    }
}

// Função para resetar o cronômetro
export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    state.minutes = 25;
    state.seconds = 0;
    updateDisplay(state.minutes, state.seconds);
}

// Função para adicionar cinco minutos ao cronômetro
export function moreFive() {
    if (state.minutes <= 55) {
        state.minutes += 5;
        updateDisplay(state.minutes, state.seconds);
    }
}

// Função para subtrair cinco minutos do cronômetro
export function minusFive() {
    if (state.minutes >= 5) {
        state.minutes -= 5;
        updateDisplay(state.minutes, state.seconds);
    }
}
