function editElement(title, match, replacer) {
    title.textContent = title.textContent.replace(new RegExp(match, 'g'), replacer)
}