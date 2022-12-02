function loadForYou() {
    let dataArea = document.getElementsByName("foryou");
    ajaxGet("/data/listenNow_foryou.json", null, true, function (json) {
        let content = "";
        for (var i = 0; i < json.length; i++) {
            let name = json[i].name;
            let author = json[i].author;
            let time = json[i].time;
            let imgUrl = json[i].img;
            content += `<div class="bigBlockItem">
                            <div class="img" style="background-image: url(${imgUrl});"></div>
                            <div class="footer">${name}<br>${author}<br>${time}</div>
                        </div>`;
        }
        for (let i = 0; i < dataArea.length; i++) {
            dataArea[i].innerHTML = content;
        }
    });
}

function loadSpatialAudioCPop() {
    let dataArea = document.getElementsByName("SpatialAudioCPop");
    ajaxGet("/data/listenNow_SpatialAudioCPop.json", null, true, function (json) {
        let content = "";
        for (var i = 0; i < json.length; i++) {
            let name = json[i].name;
            let author = json[i].author;
            let imgUrl = json[i].img;
            content += `<div class="smallBlockItemFrame">
                            <div class="smallBlockItem">
                                <div class="img" style="background-image: url(${imgUrl});"></div>
                            </div>
                            <div class="footer_1">${name}</div>
                            <div class="footer_2">${author}</div>
                        </div>`;
        }
        for (let i = 0; i < dataArea.length; i++) {
            dataArea[i].innerHTML = content;
        }
    });
}

function loadMainlandZAuthor() {
    let dataArea = document.getElementsByName("MainlandZAuthor");
    ajaxGet("/data/listenNow_MainlandZAuthor.json", null, true, function (json) {
        let content = "";
        for (var i = 0; i < json.length; i++) {
            let name = json[i].name;
            let author = json[i].author;
            let imgUrl = json[i].img;
            content += `<div class="smallBlockItemFrame">
                            <div class="smallBlockItem">
                                <div class="img" style="background-image: url(${imgUrl});"></div>
                            </div>
                            <div class="footer_1">${name}</div>
                            <div class="footer_2">${author}</div>
                        </div>`;
        }
        for (let i = 0; i < dataArea.length; i++) {
            dataArea[i].innerHTML = content;
        }
        loadExtensionOptions();
    });
}

function loadListenNowData() {
    loadForYou();
    loadSpatialAudioCPop();
    loadMainlandZAuthor();
}

loadListenNowData();