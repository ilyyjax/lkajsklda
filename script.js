// Select terminal and input elements
const inputField = document.getElementById('input');
const terminal = document.getElementById('terminal');

// Handle user input
inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let userInput = inputField.value.trim(); // Get the user's input
        if (userInput !== '') {
            terminal.innerHTML += `<p>> ${userInput}</p>`; // Display user input in terminal
            inputField.value = ''; // Clear the input field

            // Simulate AI response after a brief delay
            setTimeout(() => {
                let aiResponse = getResponse(userInput); // Get AI response based on command
                terminal.innerHTML += `<p class="typing">${aiResponse}</p>`; // Display AI response with typing effect
                terminal.scrollTop = terminal.scrollHeight; // Keep terminal scrolled to bottom
            }, 500); // Delay before AI response appears
        }
    }
});

// Function to generate AI responses
function getResponse(command) {
    switch (command.toLowerCase()) {
        case 'tell me something interesting':
            return 'Did you know? Jellyfish are biologically immortal!';
        case 'show me an ascii art':
            return `
               .-""""""-.
              /         \ 
             /           \
            |   O     O   |
            |     ^       |   
            |    '-'      | 
             \           /
              \         /
               '-.....-'
            `;
        case 'clear':
            terminal.innerHTML = ''; // Clear the terminal screen
            return '';
        default:
            return 'Unknown command. Try again.';
    }
}
