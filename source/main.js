// Importação de módulos necessários para o funcionamento do cronômetro e controle de sons
import * as FocusTimer from './FocusTimer/index.js';
import * as Music from './musics/index.js';

// Inicialização das funcionalidades do cronômetro e sons ao carregar a aplicação
FocusTimer.start(25, 0); // Define o tempo inicial do cronômetro
Music.startMusic(); // Prepara o sistema de controle dos sons
