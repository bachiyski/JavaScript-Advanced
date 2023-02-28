function solve (areaIn, volIn, input){
    let data = JSON.parse(input);
    let cube = data[0];
    let result = [];
    for (const cube of data) {
            let curResult = {
        area : areaIn.call(cube),
        volume : volIn.call(cube)
    }
    result.push(curResult)
    }

    return result;
}
function area() {
        return Math.abs(this.x * this.y);
    };
    
    function vol() {
        return Math.abs(this.x * this.y * this.z);
        };
        
        solve(area, vol, `[
            {"x":"1","y":"2","z":"10"},
            {"x":"7","y":"7","z":"10"},
            {"x":"5","y":"2","z":"10"}
            ]`)