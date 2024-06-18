import * as sounds from "./sounds.js"; // Importa os sons definidos no módulo de sons
import state from "./state.js"; // Importa o estado global da seção de música

// Funções para controle dos sons ambientais
export function floresta() {
    if (state.musicOn) {
        musicReset();
        return;
    }
    sounds.floresta.play();
    state.musicOn = true;
    document.querySelector('#forest-button').classList.add('focus');
}

export function chuva() {
    if (state.musicOn) {
        musicReset();
        return;
    }
    sounds.chuva.play();
    state.musicOn = true;
    document.querySelector('#rain-button').classList.add('focus');
}

export function cafeteria() {
    if (state.musicOn) {
        musicReset();
        return;
    }
    sounds.cafeteria.play();
    state.musicOn = true;
    document.querySelector('#cafe-button').classList.add('focus');
}

export function lareira() {
    if (state.musicOn) {
        musicReset();
        return;
    }
    sounds.lareira.play();
    state.musicOn = true;
    document.querySelector('#fireplace-button').classList.add('focus');
}

// Função para resetar o estado da música e parar todos os sons
function musicReset() {
    sounds.floresta.pause();
    sounds.chuva.pause();
    sounds.cafeteria.pause();
    sounds.lareira.pause();

    state.musicOn = false;
    document.querySelector('#forest-button').classList.remove('focus');
    document.querySelector('#rain-button').classList.remove('focus');
    document.querySelector('#cafe-button').classList.remove('focus');
    document.querySelector('#fireplace-button').classList.remove('focus');
}
