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

gameStateText["start"] = "It might seem absurd, but it's true, backed by the trends and data gathered from AI.";

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
        setTimeout(normal, 3000); // Show the "again" button after 4 seconds
    };
    if (command === 'silver') {
        setTimeout(broken, 3000); // Show the "again" button after 4 seconds
    };
    if (command === '101') {
        setTimeout(legen, 2000); // Show the "again" button after 4 seconds
    };
    if (command === 'book') {
        setTimeout(normal, 2000); 
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
    hideContentDiv();
    con();
    handleButtonClick('gold');
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
            message: "So, your rich mother thought you were too spoiled and scandalous, right?<br> Sent you packing off to a boarding school. It was a pretty messed-up place; you went through some rough stuff and came out pretty messed up. After a year of that drama, you finally broke free. Now, what's the plan? What do you wanna do next?",
        };
    } else if (command === 'options') {
        return {
            message: "You died young because of overworking!!!!",
            
        };
    } else if (command === 'silver') {
        return {
            message: "You faced the challenges of having a child and undergoing an abortion, followed by a breakup with a callous individual. To compound matters, your family took away all your money, leading to the imposition of a conservatorship. Your mental health suffered, and unfortunately, no one extended a helping hand... But you are still a superstar...",
        };
    } else if (command === 'transparent') {
        return {
            message: "You opened up to your parents about your true feelings, and with their support, you bid farewell to your life as a child star. Even after leaving that phase of your career, you retained a dedicated fan base. Now, as you've crossed the age of 18, a new aspiration has ignited within you—you yearn to be a rock star. Fueled by this newfound passion, you've made the decision to embark on a thrilling journey to become the rock star you've always envisioned.",
        };
    } else if (command === 'gold') {
        return {
            message: "After revealing your genuine emotions to your parents, they insisted on keeping you in the child star limelight, leading to a struggle with depression and thoughts of suicide. Subsequently, you were sent to a youth camp due to substance abuse. Upon your release, therapy helped you recognize the patterns of family abuse you had endured. Inspired by your journey, you decided to write a book detailing the challenges of being a child star and the impact of familial mistreatment.",
        };
    } else if (command === 'legen') {
        return {
            message: "After ten years of hard work and the careful cultivation of a unique social image, you now own your parents' company and have successfully established additional ventures, becoming both exceptionally successful and inspiring. During this journey, you connect with a fellow survivor from the same school, leading you both to create a documentary that explores the abuse you both endured and the resulting trauma. As people rally behind your cause, you evolve into an icon, symbolizing resilience and advocacy.",
        };
    } else {
        return {
            message: "You exposed everyone and your parents went bankrupt, now you just live a normal life as a normal teenager without any support.",
        };
    }
}


document.getElementById("again").addEventListener('click', function () {
    window.location.href = 'mcp.html';     });