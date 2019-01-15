var arr1 = "naresh".split('');
var arr2 = arr1.reverse(); // shares same reference and reverse as  hseran
console.log(arr1);
console.log(arr2);

var arr3 = "prena".split(''); // p r e n a
arr2.push(arr3); // hseran,[p r e n a]

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
// since same reference now arr1 ana arr2 points same reference
//arr1.slice(-1) return last elemet as prerna
//arr2.slice(-1) return last elemet as prerna