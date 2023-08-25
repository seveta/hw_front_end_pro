const renderItems = (array) => {
    array.forEach((item, i) => {const [name, emoji] = item;
        setTimeout(() => {
            document.write(`<p>${name}: ${emoji}</p>`);
        }, i * 1000); 
    });
}
const animalsList = [
    ['turtle', '🐢'],
    ['octopus', '🐙'],
    ['fish', '🐠'],
    ['flamingo', '🦩'],
    ['penguin', '🐧'],
];

setTimeout(() => {
    renderItems(animalsList);
  }, 1000);