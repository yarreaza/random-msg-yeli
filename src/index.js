const messages = [
    "Aquí es donde todo comienza...",
    "Commit committed",
    "El control de versiones es divertido",
    "Betty Betty",
    "Lo mismo que hacemos todas las noches, Pinky: ¡intentar conquistar el Mundo!",
    "Estoy en posición de ataque!",
    "Su commit es un lío",
    "¡Te lo explicaré cuando seas mayor!",
    "Aquí hay dragones",
    "Reinventando de nuevo la rueda",
    "Este no es el mensaje de confirmación que estás buscando.",
    "Batman!",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };