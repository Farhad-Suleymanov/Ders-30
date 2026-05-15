let arr = [1,2,6,3,2,7,8,3,1,8,6,4,3,1,8,9,9];
arr.sort((a,b) => a - b);
console.log("Original massiv: "+ arr);
let arr2 = []
let i = 1;
while (i<arr.length){
    if (arr[i] == arr[i-1]){
        arr2.push(arr[i]);
        while (arr[i] == arr[i-1]) {
            i++
        }

    }
    i++
}
console.log("Tekrarlanan ededlerden olan massiv: " + arr2);
