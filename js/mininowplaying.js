let miniNowPlaying_frame = `
<div class="song_bar">
        <div class="left">
            <div class="songImg"></div>
            <div class="songtitle">Anti-Hero</div>
            <audio src="data/music/Anti_Hero.mp3" id="mini_nowplaying_player" preload></audio>
        </div>
        <div class="right">
            <button class="button button_large" name="mini_nowplaying_play"><span class="iconfont icon-playfill" id="mini_nowplaying_play_icon"></span></button>
            <!-- <button class="button button_large" name="mini_nowplaying_next"><span class="iconfont icon-ai-rew-right"></span></button> -->
        </div>
    </div>
`;

if (self == top) {
    document.getElementById("miniNowPlaying_frame").innerHTML = miniNowPlaying_frame;
}

let player = document.getElementById("mini_nowplaying_player");
for (let i = 0; i < document.getElementsByName('mini_nowplaying_play').length; i++) {
    document.getElementsByName('mini_nowplaying_play')[i].addEventListener('click', nowplaying_play);
}
for (let i = 0; i < document.getElementsByName('mini_nowplaying_next').length; i++) {
    document.getElementsByName('mini_nowplaying_next')[i].addEventListener('click', nowplaying_next);
}
function nowplaying_play(e) {
    if (player.paused) {
        document.getElementById("mini_nowplaying_play_icon").classList.add("icon-24gf-pause2");
        document.getElementById("mini_nowplaying_play_icon").classList.remove("icon-playfill");
        player.play();
    }
    else {
        document.getElementById("mini_nowplaying_play_icon").classList.add("icon-playfill");
        document.getElementById("mini_nowplaying_play_icon").classList.remove("icon-24gf-pause2");
        player.pause();
    }

    e.stopPropagation();
}

function nowplaying_next(e) {
    e.stopPropagation();
}

for (let i = 0; i < document.getElementsByClassName("main_content").length; i++) {
    document.getElementsByClassName("main_content")[i].style.marginBottom = "55px";
}
