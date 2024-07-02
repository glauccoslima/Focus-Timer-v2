// Importação dos arquivos de áudio que serão utilizados no aplicativo
export const floresta = new Audio('./assets/sounds/Floresta.wav'); // Som de floresta
export const chuva = new Audio('./assets/sounds/Chuva.wav'); // Som de chuva
export const cafeteria = new Audio('./assets/sounds/Cafeteria.wav'); // Som de cafeteria
export const lareira = new Audio('./assets/sounds/Lareira.wav'); // Som de lareira

// Configuração dos áudios para tocarem em loop
floresta.loop = true;
chuva.loop = true;
cafeteria.loop = true;
lareira.loop = true;

// Função para iniciar a reprodução de um áudio específico
export function tocarSom(audio) {
  audio.play();
}

// Função para parar a reprodução de um áudio e resetar o tempo para o início
export function pararSom(audio) {
  audio.pause();
  audio.currentTime = 0;
}
