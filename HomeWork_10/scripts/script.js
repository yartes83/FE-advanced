function generateBlocks() {
    const blocksContainer = document.createElement("blocksContainer");
    document.body.append(blocksContainer);
    //https://learn.javascript.ru/styles-and-classes
    blocksContainer.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        width: 350px; 
        height: 350px; 
        margin: auto; 
        margin-top: 15%;`


    for (let i = 0; i < 25; i++) {
        const block = document.createElement("block");
        blocksContainer.append(block);
        block.style.cssText = `
        width: 64px;
        height: 64px;
        margin: 2px;
        border-radius: 5px;
        border-style: solid;
        border-width: 1px;
        border-color: black;`
        block.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`


        block.onclick =  () => {
            block.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
        }
    }

    return blocksContainer;
}
generateBlocks ()

window.onclick = () => {
    const block = document.getElementsByTagName("block");

    for (let i = 0; i < 25; i++) {

         block[i].style.background = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`

    }

}

//document.getElementsByTagName("block")
//https://qna.habr.com/q/577802
function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min)
}

