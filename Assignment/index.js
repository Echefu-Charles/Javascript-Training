// function factorial(num) {
//     let value = 1;
//     if (num === 1) {
//       return 1;
//     } else if (num === 0) {
//       return "Error";
//     } else if (num > 1) {
//       for (let i =0; i < num; i++) {
//         let newNum = num - i;
//         value = value * newNum;
//       }
//       return value;
//     }
    
//   } 
  
//   console.log(factorial(7));
function maxWordLocator() {
    let response = prompt("Enter your statement");
    console.log(response);
    let wordArray = response.split(' ');
    console.log(wordArray);
    if (wordArray.length < 2) {
        console.log("Response is too small")
    } else {
        let wordLength = wordArray.map(function(word) {
            return word.length;
        })
        console.log(wordLength);
        let Longest = Math.max(...wordLength);
        console.log(`Longest word ${Longest}`)
        let index = wordLength.indexOf(Longest)
        console.log(`Index of the Longest Word is ${index}`)
        // console.log(`Index of the longest word is ${Longest}`);
        console.log(`The longest word is : ${wordArray[index]}`)
    }
}



maxWordLocator()


