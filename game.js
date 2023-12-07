let i = 0;
let container = document.getElementById("type");
let gameState = "start";
let hasGem = false;
let thefools = false;

const gameStateText = {
    "start": "",
    "roomDescription": "You are in a small room with a door to the north. What will you do?",
    "escaped": "Thanks for playing!",
};

gameStateText["start"] = "You're a young artist struggling to make your way up the ladder of fame. You'll need to make some tough choices, and you'll need to be savvy and strategic to succeed";

let gemObtained = false;
let thefoolsilver = false;

function again() {
    const again = document.getElementById("again");
    again.style.display = 'grid'; // Show the "again" button
}

function singer() {
    const singer = document.getElementById("singer");
    singer.style.display = 'grid'; // Show the "again" button
}
function normal() {
    const normal = document.getElementById("normal");
    normal.style.display = 'grid'; // Show the "again" button
}
function broken() {
    const broken = document.getElementById("broken");
    broken.style.display = 'grid'; // Show the "again" button
}

function con() {
    const con = document.getElementById("content");
    con.style.display = 'none'; // Show the "again" button
}

function legen() {
    const legen = document.getElementById("legen");
    legen.style.display = 'grid'; // Show the "again" button
}


function legenout() {
    const legenout = document.getElementById("legen");
    legenout.style.display = 'none'; // Show the "again" button
}

function good() {
    const good = document.getElementById("good");
    good.style.display = 'grid'; // Show the "again" button
}


function goodout() {
    const goodout = document.getElementById("good");
    goodout.style.display = 'none'; // Show the "again" button
}

function bad() {
    const bad = document.getElementById("bad");
    bad.style.display = 'grid'; // Show the "again" button
}


function badout() {
    const badout = document.getElementById("bad");
    badout.style.display = 'none'; // Show the "again" button
}



function typeWriter() {
    if (i < gameStateText[gameState].length) {
        container.innerHTML += gameStateText[gameState].charAt(i);
        i++;

        let delay = 20;

        if (gameStateText[gameState].charAt(i - 1) === '.' &&
            gameStateText[gameState].charAt(i - 2) === '.' &&
            gameStateText[gameState].charAt(i - 3) === '.') {
            delay = Math.random() * 500 + 20; // Add a random delay between 2 and 7 seconds (5+2=7)
        }

        if (i === gameStateText["start"].length) {
            // Show the textarea after displaying the entire "start" message
            const content = document.getElementById("content");
            content.style.visibility = "visible";
            legenout();
        }

        setTimeout(typeWriter, delay);
    }
}

typeWriter();

function handleButtonClick(command) {
    const response = handleCommand(command);
    if (response.newState !== undefined) {
        gameState = response.newState;
    }

    appendResponseToTypewriter(response.message);

    typeWriter();

    if (command === 'options') {
        setTimeout(again, 2000); // Show the "again" button after 4 seconds
    };

    

    if (command === 'transparent') {
        setTimeout(singer, 2000); // Show the "again" button after 4 seconds
    };
    if (command === 'gold') {
        setTimeout(again, 3000); // Show the "again" button after 4 seconds
    };
    if (command === 'silver') {
        setTimeout(broken, 3000); // Show the "again" button after 4 seconds
    };
    if (command === '101') {
        setTimeout(legen, 2000); // Show the "again" button after 4 seconds
    };
    if (command === 'book') {
        setTimeout(bad, 2000); 
        legenout();// Show the "again" button after 4 seconds
        return; 
    };
    if (command === 'legen') {
        setTimeout(good, 2000); 
        good();// Show the "again" button after 4 seconds
        return; 
    };
}

function hideContentDiv() {
    const contentDiv = document.getElementById("content");
    contentDiv.style.visibility = 'hidden'; // Hide the content div
}

// Attach button click handlers
document.querySelector('button[data-command="101"]').addEventListener('click', function () {
    hideContentDiv();
    con();
    
    handleButtonClick('101');
});

document.querySelector('button[data-command="options"]').addEventListener('click', function () {
    hideContentDiv();
    con();
    handleButtonClick('options');
});

document.querySelector('button[data-command="silver"]').addEventListener('click', function () {
    hideContentDiv();
    con();
    handleButtonClick('silver');
});

document.querySelector('button[data-command="transparent"]').addEventListener('click', function () {
    hideContentDiv();
    con();
    handleButtonClick('transparent');
});

document.querySelector('button[data-command="gold"]').addEventListener('click', function () {
    handleButtonClick('gold');
    legenout();
});

document.querySelector('button[data-command="book"]').addEventListener('click', function () {
    hideContentDiv();
    legenout();
    handleButtonClick('book');
});

document.querySelector('button[data-command="legen"]').addEventListener('click', function () {
    hideContentDiv();
    legenout();
    handleButtonClick('legen');
});

// Function to reset the game
function resetGame() {
    // Reset any game state or variables here
    container.innerHTML = ""; // Clear the text in the container
    gameState = "start"; // Reset the game state
    hasGem = false; // Reset gem status
    thefools = false; // Reset other variables if needed

    // Reset any other UI elements or variables as needed

    // Hide the again button after resetting the game
    document.getElementById("again").style.display = "none";
    document.getElementById("legen").style.display = "none";
    // Start the typewriter effect again
    i = 0;
    typeWriter();
}

// Attach click handler for the "again" button
document.getElementById("again").addEventListener('click', resetGame);

function appendResponseToTypewriter(message) {
    container.innerHTML += "<br>👁🫦👁: " + message + "<br>";
}

function handleCommand(command) {
    if (command === '101') {
        return {
            message: " You gotta have cash to lay down tracks and make ends meet, but man, it's just too tough.",
        };
    } else if (command === 'options') {
        return {
            message: "You're known, but not like super famous. You've got your fanbase, but then you realize you need more life experience. The whole celebrity scene feels like too much pressure and gets you down, so one day, you just decide to quit and go travel.",
            
        };
    } else if (command === 'silver') {
        return {
            message: "Keeping it real, having good mental health, and being talented form the ultimate combo for becoming legendary in the world of celebrities.",
        };
    } else if (command === 'transparent') {
        return {
            message: "You're known, but not like super famous. You've got your fanbase, but then you realize you need more life experience. The whole celebrity scene feels like too much pressure and gets you down, so one day, you just decide to quit and go travel.",
        };
    } else if (command === 'gold') {
        return {
            message: "You can not keep up with the bills so u just quit",
        };
    } else if (command === 'legen') {
        return {
            message: "After stripping, you rake in loads of cash and start investing in yourself and your music career. You openly share your past with people, no holding back, and that just makes folks dig you and rally behind you. Your journey has made you one-of-a-kind.",
        };
    } else {
        return {
            message: " After making a pact with devils, you scored big – fame, fortune, a dream house, and a family. However, one day, the devils show up, asserting their claim because of the deal. They whisk you away to hell, swapping you out with a clone. ",
        };
    }
}


document.getElementById("again").addEventListener('click', function () {
    window.location.href = 'index.html';     });