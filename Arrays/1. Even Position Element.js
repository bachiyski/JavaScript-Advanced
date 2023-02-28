function solve(arr){
    const newArr = [];
    for (let index = 0; index <= arr.length; index++) {
        if (index % 2 === 0) {
            newArr.push(arr[index])
        }
        
    }
    console.log(newArr.join(' '));
}
solve(['20', '30', '40','50', '60'])