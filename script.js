console.log("hi bishal");

//intialize variables

let songindex = 1;
let audioelement = new Audio(`songs/1.mp3`);
let masterplay = document.getElementById('masterplay')
let progressbar = document.getElementById('progress-bar')
let gif = document.getElementById('gif');
let playsong = document.getElementById('playsong');
let songs = [
    {
        songname:"Stay with me",
        filepath:"songs/1.mp3",
        coverpath:"covers/1.jpg"
    },
    {
        songname:"Can't help falling in Love",
        filepath:"songs/1.mp3",
        coverpath:"covers/1.jpg"
    },
    {
        songname:"Zoom",
        filepath:"songs/1.mp3",
        coverpath:"covers/1.jpg"
    },
    {
        songname:"Hey stupid, i love you",
        filepath:"songs/1.mp3",
        coverpath:"covers/1.jpg"
    },
    {
        songname:"Line wthout a hook",
        filepath:"songs/1.mp3",
        coverpath:"covers/1.jpg"
    },
    {
        songname:"Christmas Tree",
        filepath:"songs/1.mp3",
        coverpath:"covers/1.jpg"
    },
    {
        songname:"Girl of my dreams",
        filepath:"songs/1.mp3",
        coverpath:"covers/1.jpg"
    },
    {
        songname:"Butterflies",
        filepath:"songs/1.mp3",
        coverpath:"covers/1.jpg"
    },
    {
        songname:"Perfect",
        filepath:"songs/1.mp3",
        coverpath:"covers/1.jpg"
    }
]

//handle play/pause
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else if(audioelement.play){
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
})

audioelement.addEventListener('timeupdate' , ()=>{

    percent = parseInt((audioelement.currentTime/audioelement.duration)*100);
    progressbar.value = percent
})

progressbar.addEventListener('change', ()=>{
    audioelement.currentTime=progressbar.value*audioelement.duration/100;
})

Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        songindex = parseInt(e.target.id);
        console.log(songindex);
        audioelement.src = `songs/${songindex}.mp3`;
        playsong.innerText = songs[songindex-1].songname;
        gif.style.opacity = 1;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
});

document.getElementById('next').addEventListener('click', ()=>{
   
    if(songindex == 9){
        songindex = 1;
    }
    else{
        songindex += 1;
    }
    console.log(songindex);
    audioelement.src = `songs/${songindex}.mp3`;
    playsong.innerText = songs[songindex-1].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
  
    if(songindex == 1){
        songindex = 9;
    }
    else{
        songindex -= 1;
    }
    console.log(songindex);
    audioelement.src = `songs/${songindex}.mp3`;
    playsong.innerText = songs[songindex-1].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})


// audioelement.play();