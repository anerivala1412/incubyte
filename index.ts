const add1 = (numbers: string = ""): number => {
    return numbers === "" ? 0 : parseInt(numbers);
};

console.log(add1(""));
