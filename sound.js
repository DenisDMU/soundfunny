const audio = ['pig','clown','boing','classic','coca','door','duck',
'incoming','meerkat','why','celebration','clap',
'yoshi','PS2','FBI','W o W','coin'];

audio.forEach((audio)=>{
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = audio;

    btn.addEventListener('click',()=>{
        stopAudio();
        document.getElementById(audio).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

function stopAudio(){
    audio.forEach(sound =>{
        const song = document.getElementById(sound);

        song.pause()
        song.currentTime = 0;
    });
};

document.getElementById('stopbtn').addEventListener('click',()=>{
    stopAudio();
});