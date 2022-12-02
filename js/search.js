let datas = [];
let placeholderDatas = [];
function initSearchListener() {
    document.getElementById('search').addEventListener('keyup', inputChange);
}
let timer = null;
function inputChange (e) {
    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(function () {
        clearInterval(timer);
        timer = null;
        doSearch(e.target.value);
    }, 500);
}

function doSearch (search) {
    if (search) {
        let filterDatas = datas.filter(value => {
            return value.name.match(search) || value.author.match(search);
        });
        UILoadData(filterDatas);
    }
    else {
        UILoadData(datas);
    }
}

function loadSearchData () {
    ajaxGet("/data/search_allData.json", null, true, function (json) {
        datas = json;
        UILoadData(datas);
    });
}

function initSearchPlaceholder () {
    let dataArea = document.getElementById("search");
    ajaxGet("/data/search_placeholder.json", null, true, function (json) {
        placeholderDatas = json;
        dataArea.setAttribute("placeholder", "你可能感兴趣：" + placeholderDatas[Math.floor(Math.random() * placeholderDatas.length)]);
        setInterval(function () {
            dataArea.setAttribute("placeholder", "你可能感兴趣：" + placeholderDatas[Math.floor(Math.random() * placeholderDatas.length)]);
        }, 5000);
    });
}

function UILoadData(datas) {
    let dataArea = document.getElementById("searchData");
    let content = "";
    for (let i = 0; i < datas.length; i++) {
        let data = datas[i];
        content += ` <div class="list_li btn"><div class="list_content">
                        <div class="searchDataFrame">
                            <div class="imgFrame">
                                <div class="img" style="background-image: url(${data.img});"></div>
                            </div>
                            <div class="textFrame">
                                <div class="title1">${data.name}</div>
                                <div class="title2">${data.author}</div>
                            </div>
                        </div>
                    </div></div>`;
    }
    dataArea.innerHTML = content;
}

loadSearchData();
initSearchListener();
initSearchPlaceholder();