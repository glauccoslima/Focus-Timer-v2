// Estado inicial do cronômetro
export default {
  minutes: 25, // Tempo inicial em minutos
  seconds: 0,  // Tempo inicial em segundos
  isRunning: false, // Estado de execução do cronômetro
  isMute: true, // Estado de mudo, controla se o som está ativado
  countdownId: null, // Armazena o ID do timeout para poder limpar posteriormente
};
