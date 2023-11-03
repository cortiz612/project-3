document.addEventListener("DOMContentLoaded", function () {
    const videoElement = document.getElementById("video");
    const contentElement = document.getElementById("content");
    const subtitles = document.getElementById("subtitles");


    videoElement.addEventListener("cuechange", function () {
        const activeCues = videoElement.textTracks[0].activeCues;

        if (activeCues.length > 0) {
            const currentCue = activeCues[0]; 
            const cueText = currentCue.text;
            contentElement.textContent = cueText;
        } else {
            contentElement.textContent = "No cue available";
        }
    });

    const playButton = document.getElementById("play_button");
    const pauseButton = document.getElementById("pause_button");
    const muteButton = document.getElementById("mute");
    const unmuteButton = document.getElementById("unmute");
    const rewindButton = document.getElementById("rewind");
    const endButton = document.getElementById("end");

    playButton.addEventListener("click", function () {
        videoElement.play();
        audioElement.play();
    });

    pauseButton.addEventListener("click", function () {
        videoElement.pause();
        audioElement.pause();
    });

    muteButton.addEventListener("click", function () {
        videoElement.muted = true;
        audioElement.muted = true;
    });

    unmuteButton.addEventListener("click", function () {
        videoElement.muted = false;
        audioElement.muted = false;
    });

    rewindButton.addEventListener("click", function () {
        videoElement.currentTime = 0;
        audioElement.currentTime = 0;
    });

    endButton.addEventListener("click", function () {
        videoElement.currentTime = videoElement.duration;
        audioElement.currentTime = audioElement.duration;
    });
});
