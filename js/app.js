
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

async function getVideos(){
    const videoContainer = document.querySelector('#video-container');
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCnBq6q_POCNVwvCJ1KCNYUA&maxResults=10&order=date&key=AIzaSyDbhMyxIM5M3AUyg1TxEV7-3fnpuTR8g4c`;
    const response = await fetch(url);
    const data = await response.json();
    const videos = data.items;
    console.log(videos);

    for(let video of videos) {
        console.log(video.snippet.title)
        videoContainer.innerHTML += `
            <img src="${video.snippet.thumbnails.default.url}" />
        `
    }
}   

getVideos();
setYear();





