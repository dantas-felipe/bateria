//Comando para verificar qual tecla foi apertada
document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
});

//Comando para ver o que foi digitado no compositor e tocar a sequencia
document.querySelector('.composer button').addEventListener('click',()=>{
    let song = document.querySelector('#input').value;

    if(song!==''){
        let songArray = song.split('');
        playComposition(songArray);
    }
})

document.querySelector('#limpar').addEventListener('click',()=>{
    document.querySelector('#input').value='';
});

//Função que pega o som de acordo com a tecla apertada
function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`); 
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    
    if(audioElement){
        audioElement.currentTime=0;
        audioElement.play();
    }

    if (keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray){
        setTimeout(()=>{

            playSound(`key${songItem}`);

        }, wait);

        wait += 350;

    }
}