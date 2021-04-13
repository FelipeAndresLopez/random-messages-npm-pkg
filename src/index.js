const messages = ['Felipe', 'Silvia', 'Martina', 'Jorge', 'Nidia'];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

module.exports = { randomMsg };