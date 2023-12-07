let i = 0;
    let container = document.getElementById("type");
    let gameState = "start";
    let hasGem = false;
    let thefools = false;

    const gameStateText = {
        "start": "",
        "roomDescription": "You are in a small room with a door to the north. What will you do?",
        "escaped": "Thanks for playing!"
    };

    gameStateText["start"] = "Welcome to 'Twisted: Rise of a celebrity'. Please note: This game's narrative and storyline are constructed by an AI typewriter, utilizing real-world data from various artists. As a result, you may notice similarities with well-known individuals. However, any resemblance to real persons is coincidental and not intended to be taken seriously. Now, let's proceed—please select your default character.";

    let gemObtained = false;
    let thefoolsilver = false;


    function typeWriter() {
        if (i < gameStateText[gameState].length) {
            container.innerHTML += gameStateText[gameState].charAt(i);
            i++;

            let delay = 10;

            if (gameStateText[gameState].charAt(i - 1) === '.' &&
                gameStateText[gameState].charAt(i - 2) === '.' &&
                gameStateText[gameState].charAt(i - 3) === '.') {
                delay = Math.random() * 5000 + 2000; // Add a random delay between 2 and 7 seconds (5+2=7)
            }

            if (i === gameStateText["start"].length) {
                // Show the choice options after displaying the entire "start" message
                const choiceOptions = document.getElementById("choiceOptions");
                choiceOptions.style.visibility = "visible";
            }
            

            setTimeout(typeWriter, delay);
        }
    }

    typeWriter();

 // Modify the confirmChoices function
function confirmChoices() {
    const selectedChoices = {
        ageCategory: null,
        styleCategory: null,
        otherCategory: null,
    };

    // Get the selected checkboxes
    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            const category = getCategory(checkbox.id.replace("Checkbox", ""));

            // Check if another choice from the same category is already selected
            if (selectedChoices[category] === null) {
                selectedChoices[category] = checkbox.id.replace("Checkbox", "");
            } else {
                // Uncheck the current checkbox if another choice is already selected in the same category
                checkbox.checked = false;
            }
        }
    });

    // Check if one option from each category is selected
    if (
        selectedChoices.ageCategory !== null &&
        selectedChoices.styleCategory !== null &&
        selectedChoices.otherCategory !== null
    ) {
        const command = "choices: " + JSON.stringify(selectedChoices);
        processUserCommand(command);
    }
}

// Add a function to determine the category of a choice
function getCategory(choice) {
    const ageChoices = ["under18", "over18"];
    const styleChoices = ["uniqueHairstyle", "authentic"];

    if (ageChoices.includes(choice)) {
        return "ageCategory";
    } else if (styleChoices.includes(choice)) {
        return "styleCategory";
    } else {
        return "otherCategory";
    }
}
    function processUserCommand(command) {
        const response = handleCommand(command);
        if (response.newState !== undefined) {
            gameState = response.newState;
        }
        appendResponseToTypewriter(response.message);

        if (response.gemObtained) {
            hasGem = true;
            showGemImage();
        } else {
            hasGem = false;
            hideGemImage();
        }

        
        userInput.value = "";
        typeWriter();
    }
    
    

  
function appendResponseToTypewriter(message) {
    container.innerHTML += "<br>👁🫦👁: " + message + "<br>";
}

// Modify the handleCommand function
function handleCommand(command) {
    const choices = JSON.parse(command.split(": ")[1]);
    const characterImage = document.getElementById("characterImage");
    const characterDiv = document.getElementById("characterDiv");
    const content = document.getElementById("content");
    let nextState, message;

    // Process the selected choices based on game logic
    if (
        choices.ageCategory !== null &&
        choices.styleCategory !== null &&
        choices.otherCategory !== null
    ) {
        if (choices.ageCategory === "under18") {
            window.location.href = "normal.html"; // Redirect if under 18
            return;
        } else if (
            choices.ageCategory === "over18" &&
            choices.styleCategory === "authentic"
        ) {
            nextState = "normal";
            window.location.href = "game.html"; 
            message = "Normal.";
        } else if (
            choices.styleCategory === "uniqueHairstyle" &&
            choices.otherCategory !== null
        ) {
            nextState = "legendary";
            window.location.href = "legen.html"; 
            message = "Legendary.";
        } else {
            nextState = gameState;
            message = "Seems like an unexpected combination. Nothing special happens.";
        }
    
        // Check for Social Media Star in otherCategory
        if (choices.otherCategory === "socialMediaStar") {
            window.location.href = "social.html";
            return;
        }
        characterDiv.style.display = "block";  
        choiceOptions.style.display = "none";
      
        // Show the character div
        gameState = nextState;
        appendResponseToTypewriter(message);
        typeWriter();
    } else {
        // In case the user somehow submits without selecting from each category
        alert("Please select one option from each category.");
        typeWriter();
    }
}


function showGemImage() {
    const gem = document.getElementById("gem");
    gem.style.display = "block";
}

function hideGemImage() {
    const gem = document.getElementById("gem");
    gem.style.display = "none";
}

function showSilverImage() {
    const silver = document.getElementById("silver");
    silver.style.display = "block";
}

function hideSilverImage() {
    const silver = document.getElementById("silver");
    silver.style.display = "none";
}

function showgold() {
    const gold = document.getElementById("gold");
    gold.style.display = "block";
}

function hidegold() {
    const gold = document.getElementById("gold");
    gold.style.display = "none";
}

function showtrans() {
    const trans = document.getElementById("trans");
    trans.style.display = "block";
}

function hidetrans() {
    const trans = document.getElementById("trans");
    trans.style.display = "none";
}