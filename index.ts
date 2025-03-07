import * as readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const add = (numbers: string = ""): number => {
    if (!numbers) return 0;
    return numbers.split(/,|\n/).map(Number).reduce((sum, num) => sum + num, 0);
};

let userInput = "";

rl.on("line", (line) => {
    if (line === "") {  
        console.log(`\nInput: \n"${userInput}"`);
        
        try {
            const result = add(userInput);
            console.log(`Output: ${result}`);
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }

        rl.close();
    } else {
        userInput += (userInput ? "\n" : "") + line; 
    }
});