function loadLibraryData() {
    let dataArea = document.getElementsByName("library");
    ajaxGet("/data/library.json", null, true, function (json) {
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

loadLibraryData();