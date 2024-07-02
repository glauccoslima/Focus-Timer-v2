import state from "./state.js"; // Importa o estado do cronômetro
import * as el from "./elements.js"; // Importa os elementos de interface para manipulação
import { reset as originalReset } from "./actions.js"; // Importa a função de reset padrão do cronômetro
import { musicReset } from "../musics/actions.js"; // Importa a função para parar a reprodução de músicas

/**
 * Função que gerencia a contagem regressiva do cronômetro.
 */
export function countdown() {
  clearTimeout(state.countdownId); // Limpa o timeout para evitar chamadas duplicadas

  if (!state.isRunning) { // Verifica se o cronômetro está ativo
    return; // Encerra a função se o cronômetro não estiver ativo
  }

  let minutes = Number(el.minutes.textContent); // Converte o conteúdo textual dos minutos para número
  let seconds = Number(el.seconds.textContent); // Converte o conteúdo textual dos segundos para número

  seconds--; // Decrementa os segundos
  if (seconds < 0) { // Se os segundos forem menor que zero
    seconds = 59; // Reseta os segundos para 59
    minutes--; // Decrementa um minuto
  }

  if (minutes < 0) { // Se os minutos forem menor que zero
    originalReset(); // Chama a função de reset do cronômetro
    musicReset();  // Chama a função para parar os sons
    return; // Encerra a função
  }

  // Atualiza os textos dos elementos de minutos e segundos
  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");

  // Define um novo timeout para continuar a contagem regressiva
  state.countdownId = setTimeout(countdown, 1000);
}

/**
 * Atualiza os displays de minutos e segundos.
 */
export function updateDisplay(minutes = state.minutes, seconds = state.seconds) {
  // Define o conteúdo textual dos elementos de minutos e segundos
  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
