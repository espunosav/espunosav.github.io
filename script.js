// var dog_whine = new Audio("/Audio/Dog_Whining.wav");
// function myAudioFunction(audio_file) {
//     if(audio_file == "Dog_whine"){
//         dog_whine.play();
//     }
// };

function play_single_sound() {
    var playPromise = document.getElementById('dog').play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
}
