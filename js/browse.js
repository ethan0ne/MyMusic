function initBrowseData() {
    let dataArea = document.getElementById("browse");
    ajaxGet("data/browse.json", null, true, function (json) {
        let content = "";
        for (var i = 0; i < json.length; i++) {
            let name = json[i].name;
            let imgUrl = json[i].img;
            content += `<div class="item">
                    <div class="img" style="background-image: url(${imgUrl});" ></div>
                        <div class="footerText">${name}</div>
                </div>`;
        }
        dataArea.innerHTML = content;
    });
}

initBrowseData();