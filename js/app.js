
const body = document.querySelector('body');
const themeButtons = document.querySelectorAll('.theme');


themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.theme === 'blue') {
            body.classList.remove('light');
            body.classList.remove('dark');
            body.classList.add('blue');
        } else if(button.dataset.theme === 'dark') {
            body.classList.remove('light');
            body.classList.remove('blue');
            body.classList.add('dark');
        } else if(button.dataset.theme === 'light') {
            body.classList.remove('dark');
            body.classList.remove('blue');
            body.classList.add('light');
        }
    })
})

//function get to year and display in footer
const setYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    document.querySelector('#date').innerHTML = year;
}


setYear();





