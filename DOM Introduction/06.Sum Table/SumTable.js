function sumTable() {
    const trList = Array.from(document.querySelectorAll('tbody tr'));
    let sum = 0;
    const result = document.getElementById('sum')


    for (let i = 1; i < trList.length - 1; i++) {
        debugger
        sum += +trList[i].children[1].textContent
    }
    result.textContent = sum
}