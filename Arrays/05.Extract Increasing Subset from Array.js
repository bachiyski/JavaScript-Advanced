function solve(arr){
let newArr = [arr[0]];
for (let i = 0; i < arr.length; i++) {
    if(arr[i] >= arr[i-1]){
        newArr.push(arr[i])
    }
}
console.log(newArr.join('\n'));
}
solve([20, 
    3, 
    2, 
    15,
    6, 
    1])