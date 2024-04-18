const numbersStrings = ["Jonas", 99, "Ulrich", 25, "Capitão Levi", "Paul Atreides", 4, "Zeke yega", "Will o sábio", "Bob", "Número 11", "Eren yega", "Major armstrong", 80, "Edward elric", "Will", 80, "chani", "Mikasa ackerman"]
const stringArray = [];

for (let index = 0; index < numbersStrings.length; index += 1) {
    const item = numbersStrings[index]

    if (typeof (item) === 'string') {
        stringArray.push(item);
    } 

}

console.log(stringArray);