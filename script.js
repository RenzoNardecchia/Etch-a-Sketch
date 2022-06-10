    // I declared a variable that will be the parent node
    const mainContainer = document.querySelector('#main-container');

    // I made an array so it's easier to store the multiple divs
    let tileContainer = [];

    // I created a variable tile to create divs, but put it outside the loop
    // so I can access it later in case I need to
    let tile;

    // This variable will display the current board size
    let boardSizeCounter = document.querySelector('#boardSizeCounter');
    
    // With this variable the user will set the first board size
    let boardSize = prompt('Enter a board size (from 2 to 100)', 2); 

    // Here I limit the user input so it is between 2 and 100
    if (boardSize > 100){
        boardSize = 100;
    } else if(boardSize < 2 || !boardSize){
        boardSize = 2;
    }
    
    boardSizeCounter.textContent = `Board size = ${boardSize} x ${boardSize}`;

    // I made a variable that calculates the tile size according to the ammount of divs created
    let tileSize = 450 / boardSize;
    
    
    function createBoard(){
        // I made a loop to create the divs, added them to the divContainer array
        // and added classes
        for(let i = 0; i < (boardSize**2); i++){
            tile = document.createElement('div');
            tileContainer[i] = tile;
            tile.classList.add('square');
            tile.classList.add(`${i +1}`);
            tile.setAttribute('style', `width: ${tileSize}px;`);
        }
        
        // I made a loop to append all the divs to the mainContainer
        for(let j = 0; j < tileContainer.length; j++){
            mainContainer.appendChild(tileContainer[j]);
        }
    }
    createBoard();
    
    // These two variables will select the different modes to draw on the board
    let colorModeBtn = document.querySelector('#colorModeBtn');
    let rainbowModeBtn = document.querySelector('#rainbowModeBtn');

    // This variable will be the eraser mode
    let eraserBtn = document.querySelector('#eraser');

    // This variable will hold the button that clears the board
    const clearButton = document.querySelector('#clear');
    
    // With this function I made so when the mouse hovers on the tile it turns to
    // the color the user picks
    function colorMode(){
        for(let i = 0; i < (boardSize**2); i++){
            tileContainer[i].addEventListener('mouseover', () =>{
                tileContainer[i].setAttribute(
                    'style', `width: ${tileSize}px; background-color: 
                    ${document.querySelector('#colorModeBtn').value};`);
            });
        }
    }
    
    // colorMode will be the default mode with this function
    colorMode();
    
    // With this function I made so when the mouse hovers on the tile it turns a random color
    function rainbowMode(){
        for(let i = 0; i < (boardSize**2); i++){
            let randomR = Math.floor(Math.random() * 255);
            let randomG = Math.floor(Math.random() * 255);
            let randomB = Math.floor(Math.random() * 255);
            tileContainer[i].addEventListener('mouseover', () =>{
                tileContainer[i].setAttribute(
                    'style', `width: ${tileSize}px; background-color: 
                    rgb(${randomR}, ${randomG}, ${randomB});`);
            });
        }
    }
    
    // With this function I made so when the mouse hovers on the tile it turns white
    function eraserMode(){
        for(let i = 0; i < (boardSize**2); i++){
            let randomR = Math.floor(Math.random() * 255);
            let randomG = Math.floor(Math.random() * 255);
            let randomB = Math.floor(Math.random() * 255);
            tileContainer[i].addEventListener('mouseover', () =>{
                tileContainer[i].setAttribute(
                    'style', `width: ${tileSize}px; background-color: #ffffff;`);
            });
        }
    }

    // With this function (and loop) I cicle through the array and clear each tile
    function clearBoard(){
        for(let i = 0; i < (boardSize**2); i++){
                tileContainer[i].setAttribute('style', `width: ${tileSize}px; background-color: white;`);  
        }
    }

    // This is the button that will clear the board
    const changeBoardSize = document.querySelector('#changeBoardSize');
    changeBoardSize.addEventListener('click', ()=>{

        // Here I made a loop to delete all the previous divs
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.firstChild);
        }
        // And here I reassign the variables and create a new board
        boardSize = prompt('Enter a board size (from 2 to 100)', 2);
        
        if (boardSize > 100){
            boardSize = 100;
        } else if(boardSize < 2 || !boardSize){
            boardSize = 2;
        }
        
        tileContainer = [];

        boardSizeCounter.textContent = `Board size = ${boardSize} x ${boardSize}`;

        tileSize = 450 / boardSize;

        createBoard();
        colorMode();
    }); 

    colorModeBtn.addEventListener('click', colorMode);
    rainbowModeBtn.addEventListener('click', rainbowMode);
    eraserBtn.addEventListener('click', eraserMode);
    clearButton.addEventListener('click', clearBoard);