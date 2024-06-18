// Importação de módulos necessários: estado geral, elementos do DOM e função de reset
import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";

/**
 * Função para gerenciar a contagem regressiva do cronômetro.
 * É chamada repetidamente até que o cronômetro seja pausado ou o tempo esgote.
 */
export function countdown() {
    clearTimeout(state.countdownId); // Limpa o timeout anterior para evitar que se acumulem

    if (!state.isRunning) {
        return; // Interrompe a função se o cronômetro não estiver ativo
    }

    // Obtém os minutos e segundos atuais do cronômetro
    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);

    // Decrementa os segundos e ajusta os minutos se necessário
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }

    // Se os minutos forem menores que zero, chama a função de reset
    if (minutes < 0) {
        reset();
        return;
    }

    // Atualiza o display do cronômetro com os novos valores de tempo
    el.minutes.textContent = String(minutes).padStart(2, "0");
    el.seconds.textContent = String(seconds).padStart(2, "0");

    // Agenda a próxima chamada da função countdown para daqui a 1 segundo
    state.countdownId = setTimeout(countdown, 1000);
}

/**
 * Função para atualizar a exibição do cronômetro no DOM.
 * Pode ser chamada com valores específicos de minutos e segundos.
 * @param {number} minutes - Minutos para serem exibidos (default: minutos do estado global)
 * @param {number} seconds - Segundos para serem exibidos (default: segundos do estado global)
 */
export function updateDisplay(minutes = state.minutes, seconds = state.seconds) {
    // Atualiza os elementos do DOM para minutos e segundos, preenchendo com zero à esquerda se necessário
    el.minutes.textContent = String(minutes).padStart(2, "0");
    el.seconds.textContent = String(seconds).padStart(2, "0");
}
