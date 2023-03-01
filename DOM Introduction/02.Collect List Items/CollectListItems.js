function extractText() {
    const items = Array.from(document.getElementById('items').children);
    const result = document.getElementById('result');
    let output = '';
    for (const item of items) {
        output += `${item.textContent}\n`
    }
    result.textContent = output
}