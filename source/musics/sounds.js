// Importa e configura os arquivos de áudio para os sons de ambiente
export const floresta = new Audio('./assets/sounds/Floresta.wav');
export const chuva = new Audio('./assets/sounds/Chuva.wav');
export const cafeteria = new Audio('./assets/sounds/Cafeteria.wav');
export const lareira = new Audio('./assets/sounds/Lareira.wav');

// Define que os áudios devem ser repetidos indefinidamente
floresta.loop = true;
chuva.loop = true;
cafeteria.loop = true;
lareira.loop = true;
