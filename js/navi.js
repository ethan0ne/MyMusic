let navi_frame = "";
navi_frame += ("     <div class=\'navi_bar\'>");
navi_frame += ("        <div class=\'item\' name=\'navi_listenNow\'>");
navi_frame += ("            <div class=\'iconfont icon-24gf-playCircle\'></div>");
navi_frame += ("            <div class=\'text\'>现在就听</div>");
navi_frame += ("        </div>");
navi_frame += ("        <div class=\'item\' name=\'navi_browse\'>");
navi_frame += ("            <div class=\'iconfont iconfont2 icon-appstore-fill\'></div>");
navi_frame += ("            <div class=\'text\'>浏览</div>");
navi_frame += ("        </div>");
// navi_frame += ("        <div class=\'item\' name=\'navi_radio\'>");
// navi_frame += ("            <div class=\'iconfont iconfont2 icon-ios-radio\'></div>");
// navi_frame += ("            <div class=\'text\'>广播</div>");
// navi_frame += ("        </div>");
navi_frame += ("        <div class=\'item\' name=\'navi_library\'>");
navi_frame += ("            <div class=\'iconfont icon-library-music\'></div>");
navi_frame += ("            <div class=\'text\'>资料库</div>");
navi_frame += ("        </div>");
navi_frame += ("        <div class=\'item\' name=\'navi_search\'>");
navi_frame += ("            <div class=\'iconfont iconfont3 icon-search\'></div>");
navi_frame += ("            <div class=\'text\'>搜索</div>");
navi_frame += ("        </div>");
navi_frame += ("    </div>");
navi_frame += ("    <div class=\'navi_bar_left\'>");
navi_frame += ("        <div class=\'navi_bar_top\'>音乐</div>");
navi_frame += ("        <div class=\'content\'>");
navi_frame += ("            <div class=\'item\' name=\'navi_listenNow\'>");
navi_frame += ("                <div class=\'iconfont icon-24gf-playCircle\' data-naviIconName=\'listenNow\'></div>");
navi_frame += ("                <div>现在就听</div>");
navi_frame += ("            </div>");
navi_frame += ("            <div class=\'item\' name=\'navi_browse\'>");
navi_frame += ("                <div class=\'iconfont icon-appstore-fill\' data-naviIconName=\'browse\'></div>");
navi_frame += ("                <div>浏览</div>");
navi_frame += ("            </div>");
// navi_frame += ("            <div class=\'item\' name=\'navi_radio\'>");
// navi_frame += ("                <div class=\'iconfont icon-ios-radio\' data-naviIconName=\'radio\'></div>");
// navi_frame += ("                <div>广播</div>");
// navi_frame += ("            </div>");
navi_frame += ("            <div class=\'item\' name=\'navi_library\'>");
navi_frame += ("                <div class=\'iconfont icon-library-music\' data-naviIconName=\'library\'></div>");
navi_frame += ("                <div>资料库</div>");
navi_frame += ("            </div>");
navi_frame += ("            <div class=\'item\' name=\'navi_search\'>");
navi_frame += ("                <div class=\'iconfont icon-search\' data-naviIconName=\'search\'></div>");
navi_frame += ("                <div>搜索</div>");
navi_frame += ("            </div>");
navi_frame += ("        </div>");
navi_frame += ("    </div>");

if (self == top) {
    document.getElementById("navi_frame").innerHTML = navi_frame;
}

function selectNavi(name) {
    for (let i = 0; i < document.getElementsByName("navi_" + name).length; i++) {
        document.getElementsByName("navi_" + name)[i].classList.add("active");
    }
    getElementByDataTag('naviIconName', name).style.color = "#ffffff";
}

function naviInit() {
    for (let i = 0; i < document.getElementsByName("navi_listenNow").length; i++) {
        document.getElementsByName("navi_listenNow")[i].onclick = function () {
            window.location.href = "index.html";
        };
    }

    for (let i = 0; i < document.getElementsByName("navi_browse").length; i++) {
        document.getElementsByName("navi_browse")[i].onclick = function () {
            window.location.href = "browse.html";
        };
    }

    // for (let i = 0; i < document.getElementsByName("navi_radio").length; i++) {
    //     document.getElementsByName("navi_radio")[i].onclick = function () {
    //         window.location.href = "radio.html";
    //     };
    // }

    for (let i = 0; i < document.getElementsByName("navi_library").length; i++) {
        document.getElementsByName("navi_library")[i].onclick = function () {
            window.location.href = "library.html";
        };
    }

    for (let i = 0; i < document.getElementsByName("navi_search").length; i++) {
        document.getElementsByName("navi_search")[i].onclick = function () {
            window.location.href = "search.html";
        };
    }
}

function titleBarInit() {
    window.onscroll = function () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= 30) {
            document.getElementById("title_bar").style.display = "flex";
        }
        else {
            document.getElementById("title_bar").style.display = "none";
        }
    }

    document.getElementById("title_bar").onclick = function () {
        let nowScroll = window.pageYOffset || document.getElement.scrollTop || document.body.scrollTop;
        let timer = setInterval(function () {
            nowScroll -= 20; // 当前代表元素的滚动条位置的变量开始减
            if (nowScroll <= 0) {
                nowScroll = 0;
                clearInterval(timer);
            }
            window.scrollTo(0, nowScroll);
        }, 1);
    }
}