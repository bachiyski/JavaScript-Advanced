function extract(content) {
    const p = document.getElementById(content);
    const pattern = /\(([\w\s]+)\)/g;
    return
    p.textContent.match(pattern).map((e) => e.substring(1, e.length - 1)).join('; ');
}