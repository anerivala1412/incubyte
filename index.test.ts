import { add } from "./index";

const testCases = [
    { input: "", expected: 0 },
    { input: "1", expected: 1 },
    { input: "1,2", expected: 3 },
    { input: "1,2,3,4,5", expected: 15 },
    { input: "1\n2,3", expected: 6 },
    { input: "//;\n1;2", expected: 3 },
    { input: "//|\n2|3|4", expected: 9 },
    { input: "//***\n1***2***3", expected: 6 },
    { input: "//[***]\n1***2***3", expected: 6 },
    { input: "//[$]\n2$4$6", expected: 12 },
];

console.log("Running Test Cases...\n");

testCases.forEach(({ input, expected }, index) => {
    try {
        const result = add(input);
        console.log(`Test ${index + 1}: add("${input}") => need: ${expected}, get: ${result}`);
        console.assert(result === expected, `Test ${index + 1} failed`);
    } catch (error) {
        console.error(`Test ${index + 1} Failed with Error: ${error.message}`);
    }
});

console.log("\nAll tests completed.");
