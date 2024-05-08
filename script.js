// function convertToRoman(num) {
//   	const obj = {
//       0:['M',1000], 
//       1:['D', 500], 
//       2:['C', 100], 
//       3:['L', 50], 
//       4:['X', 10], 
//       5:['V', 5], 
//       6:['I', 1]
//     };

//   //your code here
// 	let result = "";

//   for (let key in obj) {
// 		let sym = obj[key][0]
// 		let val = obj[key][1]
// 	    let count = Math.floor(num / val);
	
// 	    if (count >= 1) {
// 	      result += sym.repeat(count);
// 	      num -= val * count;
// 	    }
// 	    if (key % 2 === 0 && (key+2)<=6 &&num >=val-obj[key + 2][1]) {
// 	      result += obj[key + 2][0] + sym;
// 	      num -= obj[key + 2][1] - val;
// 	    }
// 	    else if (key % 2 === 1 && (key+1)<=6 &&num >=val-obj[key + 1][1]) {
// 	      result += obj[key + 1][0] + sym;
// 	      num -= obj[key + 1][1] - val;
// 	    }
//   }

//   return result;

// }

const romanNumerals = [
	 ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
];
    // ['M', 1000],
    // ['D', 500],
    // ['C', 100],
    // ['L', 50],
    // ['X', 10],
    // ['V', 5],
    // ['I', 1]
// ];
 
function convertToRoman(num) {
    let result = '';
    // Iterate through the romanNumerals array
    for (let i = 0; i < romanNumerals.length; i++) {
        const [roman, value] = romanNumerals[i];
        // Check how many times the current value fits into the given number
        while (num >= value) {
            result += roman; // Append the corresponding Roman numeral
            num -= value;    // Subtract the value from the given number
        }
    }
    return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 //console.log(convertToRoman(798));




// do not edit below this line
module.exports = convertToRoman
