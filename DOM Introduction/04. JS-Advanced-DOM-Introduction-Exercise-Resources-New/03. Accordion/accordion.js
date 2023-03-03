function toggle() {
    const textContainer = document.getElementById('extra');
    const button = document.querySelector('.button');
    button.textContent = button.textContent == 'More' ? 'Less' : 'More'
    textContainer.style.display == 'block' ? textContainer.style.display = 'none' : textContainer.style.display = 'block';

}