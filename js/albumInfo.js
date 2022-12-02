function loadAlbumInfoData() {
    let dataArea = document.getElementById("albumSongs");
    ajaxGet("data/albuminfo.json", null, true, function (json) {
        for (let i = 0; i < document.getElementsByName("albumName").length; i++) {
            document.getElementsByName("albumName")[i].innerHTML = json.albumInfo.name;
        }
        document.getElementById("albumAuthor").innerHTML = json.albumInfo.author;
        document.getElementById("albumMoreInfo").innerHTML = json.albumInfo.moreInfo;
        document.getElementById("albumImg").style.backgroundImage = "url(" + json.albumInfo.img + ")";
        document.getElementById("time").innerHTML = json.albumInfo.time;
        document.getElementById("numAndSongTime").innerHTML = json.albumInfo.numAndSongTime;
        document.getElementById("copyright").innerHTML = json.albumInfo.copyright;

        let songs = json.albumSongs;
        let content = "";
        for (let i = 0; i < songs.length; i++) {
            content += `<div class="list_li2">
                            <div class="left"><div class="num">${i + 1}</div>${songs[i].name}</div>
                            <div class="right">${songs[i].time}</div>
                        </div>`;
        }
        dataArea.innerHTML = content;
    });
}

loadAlbumInfoData();