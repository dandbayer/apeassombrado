function myFunction() {
    let element = document.querySelector('.glos-body');
    element.classList.toggle("dark-mode");

    let titles = document.querySelector('.glos-title');
    titles.classList.toggle("dark-mode");

    let subtitles = document.querySelector('.glos-subtitle');
    subtitles.classList.toggle("dark-mode");

    let button = document.querySelector('.dm');
    if (element.classList.contains('dark-mode')) {
    button.innerHTML = 'light_mode'
    } else {
    button.innerHTML = 'dark_mode'
    }
 }