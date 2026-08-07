//TODO: change icon when paused, credit tut

const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");
const songSlider = document.getElementById("slider");

const playButton = document.getElementById("play-song");
const nextButton = document.getElementById("next-song");
const backButton = document.getElementById("prev-song");

//TODO: update song list, names, and files

const songs= [
    {
        name: "Garnet ~Kindan no Sono E~",
        artist: "Malice Mizer",
        audio: "Assets/Garnet ~Kindan no Sono E~   MALICE MIZER.mp3",
    },
    {
        name: "True Blue",
        artist: "Luna Sea",
        audio: "Assets/LUNA-SEA-TRUE-BLUE-MV.mp3",
    },
    {
        name: "SADNESS ~I know the reason for her sadness~",
        artist: "Malice Mizer",
        audio: "Assets/SADNESS ~I know the reason for her sadness~   MALICE MIZER.mp3",
    },
    {
        name: "You and I Forever, Love is Here",
        artist: "Björn Andrésen",
        audio: "Assets/Björn-Andrésen-You-And-I-Forever-Love-Is-Here.mp3",
    },
    {
        name: "Syunikiss",
        artist: "Malice Mizer",
        audio: "Assets/Syunikiss 二度目の哀悼    Malice Mizer.mp3",
    },
    {
        name: "Mizerable",
        artist: "Gackt",
        audio: "Assets/Mizerable.mp3",
    },
    {
        name: "Transylvania",
        artist: "Malice Mizer",
        audio: "Assets/Transylvania   Malice Mizer.mp3",
    },
    {
        name: "Bela Lugosi's Dead",
        artist: "Bauhaus",
        audio: "Assets/Bela-Lugosi-s-Dead-Official-Version.mp3",
    },
    {
        name: "22194",
        artist: "Takahiro Obata",
        audio: "Assets/22194-Norman-s-Theme.mp3",
    },
    {
        name: "Watashi wa Ame",
        artist: "inabakumori, cover of Nightcord at 25:00",
        audio: "Assets/私は雨-25時-ナイトコードで-鏡音レン.mp3",
    },
];

const audio = document.createElement("audio");
let currentSongIndex = 0;
updateSong();
audio.play();

backButton.addEventListener ("click", function () {
    //returns from playing function when index is 0 to prevent it from becoming -
    if (currentSongIndex == 0) {
        return;
    }
    currentSongIndex--;
    updateSong();
});

nextButton.addEventListener ("click", function () {
    if (currentSongIndex == songs.length - 1) {
        return;
    }
    currentSongIndex++;
    updateSong();
});

playButton.addEventListener ("click", function () {
    if (!audio.paused) {
        audio.pause();
        //figure out how to change button
        playButton.class = "fa-solid fa-circle-pause";
    }
    else {
        audio.play();
    };
});

function updateSong() {
    const song = songs[currentSongIndex];
    songName.innerText = song.name;
    songArtist.innerText = song.artist;

    //tells js where to get audio from
    audio.src = song.audio;

    //sets value of slider AFTER js learns audio duration
    audio.onloadedmetadata = function () {
        slider.value = 0;
        slider.max = audio.duration;
    }
};

slider.addEventListener("change", function () {
    audio.currentTime = songSlider.value;
})

function moveSlider () {
    slider.value = audio.currentTime;
};

//moves slider every second
setInterval(moveSlider, 1000);

//changes to next song automatically 
audio.addEventListener("ended", function () {
    currentSongIndex++;
    updateSong();
    audio.play();
});

