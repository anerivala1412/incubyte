import * as readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const add = (numbers: string = ""): number => {
    if (!numbers) return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const [delimiterLine, numString] = numbers.split("\n", 2);
        delimiter = new RegExp(delimiterLine.slice(2).replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"));
        numbers = numString;
    }

    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(n => n < 0);

    if (negatives.length) throw new Error(`negative numbers not allowed ${negatives.join(",")}`);

    return numArray.reduce((sum, num) => sum + num, 0);
};

console.log("Enter numbers ===>");
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