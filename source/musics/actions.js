// Importações das funções de controle de som e do estado global
import * as sounds from "./sounds.js";
import state from "./state.js";

/**
 * Função para ativar o som da floresta.
 */
export function floresta() {
  if (state.musicOn) { // Verifica se já existe alguma música tocando
    musicReset(); // Reseta todas as músicas e focos atuais
    return;
  }
  sounds.tocarSom(sounds.floresta); // Inicia o som da floresta
  state.musicOn = true; // Marca que uma música está ativa
  document.querySelector('#forest-button').classList.add('focus'); // Adiciona foco visual ao botão correspondente
}

/**
 * Função para ativar o som da chuva.
 */
export function chuva() {
  if (state.musicOn) { // Verifica se já existe alguma música tocando
    musicReset(); // Reseta todas as músicas e focos atuais
    return;
  }
  sounds.tocarSom(sounds.chuva); // Inicia o som da chuva
  state.musicOn = true; // Marca que uma música está ativa
  document.querySelector('#rain-button').classList.add('focus'); // Adiciona foco visual ao botão correspondente
}

/**
 * Função para ativar o som da cafeteria.
 */
export function cafeteria() {
  if (state.musicOn) { // Verifica se já existe alguma música tocando
    musicReset(); // Reseta todas as músicas e focos atuais
    return;
  }
  sounds.tocarSom(sounds.cafeteria); // Inicia o som da cafeteria
  state.musicOn = true; // Marca que uma música está ativa
  document.querySelector('#cafe-button').classList.add('focus'); // Adiciona foco visual ao botão correspondente
}

/**
 * Função para ativar o som da lareira.
 */
export function lareira() {
  if (state.musicOn) { // Verifica se já existe alguma música tocando
    musicReset(); // Reseta todas as músicas e focos atuais
    return;
  }
  sounds.tocarSom(sounds.lareira); // Inicia o som da lareira
  state.musicOn = true; // Marca que uma música está ativa
  document.querySelector('#fireplace-button').classList.add('focus'); // Adiciona foco visual ao botão correspondente
}

/**
 * Função para resetar todas as músicas e remover o foco visual dos botões.
 */
export function musicReset() {
  sounds.pararSom(sounds.floresta); // Para o som da floresta
  sounds.pararSom(sounds.chuva); // Para o som da chuva
  sounds.pararSom(sounds.cafeteria); // Para o som da cafeteria
  sounds.pararSom(sounds.lareira); // Para o som da lareira
  state.musicOn = false; // Reseta o estado de música ativa
  // Remove o foco visual de todos os botões
  document.querySelector('#forest-button').classList.remove('focus');
  document.querySelector('#rain-button').classList.remove('focus');
  document.querySelector('#cafe-button').classList.remove('focus');
  document.querySelector('#fireplace-button').classList.remove('focus');
}
