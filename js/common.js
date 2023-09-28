const movingBlock = document.querySelector(`.block`);
const bodyHeight = document.body.clientHeight;
const bodyWidth = document.body.clientWidth;
movingBlock.style.left = 0;
movingBlock.style.top = 0;
const maxBlockTop = bodyHeight-movingBlock.clientHeight;
const maxBlockLeft = bodyWidth-movingBlock.clientWidth;

const getRandomTop = (maxBlockTop) => Math.floor(Math.random() * (maxBlockTop + 1));
const getRandomLeft = (maxBlockLeft) => Math.floor(Math.random() * (maxBlockLeft + 1));
const moveBlock = (top, left) =>{
    const currentTop = parseInt(movingBlock.style.top);
    const currentLeft = parseInt(movingBlock.style.left);

    const newTop = currentTop + top;
    const newLeft = currentLeft + left;

    if (newTop >= 0 && newTop <= maxBlockTop && newLeft >= 0 && newLeft <= maxBlockLeft) {
        movingBlock.style.top = newTop + 'px';
        movingBlock.style.left = newLeft + 'px';
    }
    else{
        movingBlock.style.top = (maxBlockTop - currentTop) + 'px';
        movingBlock.style.left = (maxBlockLeft - currentLeft) + 'px';
    }
}
 function getRandomIntInclusive(min=0, max=255) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1) + min);
 }
 const randomColor = () => {
     let first = getRandomIntInclusive();
     let second = getRandomIntInclusive();
     let third = getRandomIntInclusive();
     return `rgb(${first}, ${second}, ${third})`;
}
setInterval(() => {
     movingBlock.style.background = randomColor();
 }, 1000)
 setInterval(() => {
    moveBlock(getRandomTop(maxBlockTop), getRandomLeft(maxBlockLeft));
}, 1000)