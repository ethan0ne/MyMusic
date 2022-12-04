for (let i = 0; i < document.getElementsByName('goIndex').length; i++) {
    document.getElementsByName('goIndex')[i].addEventListener('click', goIndex);
}

/* 窗口 */
function windowDragInit(id) {
    let titleBar = document.getElementById(id).querySelector(".popUpFrame>.popUpWindow>.titleBar");
    let popUpWindow = document.getElementById(id).querySelector(".popUpFrame>.popUpWindow");

    // 获取手指的初始坐标
    let startX = 0;
    let startY = 0;

    // 获取盒子的初始位置
    let x = 0;
    let y = 0;

    let pressEvent = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'mousedown'; // 检查是否支持触摸
    titleBar.addEventListener(pressEvent, function (e) {
        // 获得初始坐标
        if (pressEvent == "touchstart") {
            // targetTouches：当前对象上所有的触摸点的列表。（类数组）
            startX = e.targetTouches[0].pageX;
            startY = e.targetTouches[0].pageY;
        }
        else {
            startX = e.clientX;
            startY = e.clientY;
        }
        x = popUpWindow.offsetLeft;
        y = popUpWindow.offsetTop;

        let moveEvent = ('ontouchmove' in document.documentElement) ? 'touchmove' : 'mousemove';
        titleBar.addEventListener(moveEvent, onMove);
        function onMove(e) {
            function newX(x, moveX, objWidth, noborder = false) {
                let nX = x + moveX;
                if (nX < 3) {
                    nX = 3;
                }
                if (nX + objWidth > window.innerWidth) {
                    nX = window.innerWidth - objWidth - 3;
                    if (noborder) {
                        nX -= 6;
                    }
                }

                return nX;
            }

            function newY(y, moveY, objHeight, noborder = false) {
                let nY = y + moveY;
                if (nY < 3) {
                    nY = 3;
                }
                if (nY + objHeight > window.innerHeight) {
                    nY = window.innerHeight - objHeight - 3;
                    if (noborder) {
                        nY -= 6;
                    }
                }
                return nY;
            }
            // 计算移动距离，移动之后的坐标-初始坐标。
            let moveX = 0;
            let moveY = 0;
            if (moveEvent == "touchmove") {
                moveX = e.targetTouches[0].pageX - startX - 3;
                moveY = e.targetTouches[0].pageY - startY - 3;
                function touchEnd(e) {
                    titleBar.removeEventListener(moveEvent, onMove);
                    popUpWindow.style.left = newX(x, moveX, popUpWindow.offsetWidth, true) + 3 + "px";
                    popUpWindow.style.top = newY(y, moveY, popUpWindow.offsetHeight, true) + 3 + "px";
                    popUpWindow.style.boxSizing = "border-box";
                    popUpWindow.style.borderStyle = 'unset';
                    popUpWindow.style.borderColor = 'unset';
                    popUpWindow.style.borderWidth = 'unset';
                    popUpWindow.style.borderRadius = '10px';
                    titleBar.removeEventListener("touchend", touchEnd);
                }
                titleBar.addEventListener("touchend", touchEnd);
            }
            else {
                moveX = e.clientX - startX - 3;
                moveY = e.clientY - startY - 3;
                function mouseup(e) {
                    titleBar.removeEventListener(moveEvent, onMove);
                    popUpWindow.style.left = newX(x, moveX, popUpWindow.offsetWidth, true) + 3 + "px";
                    popUpWindow.style.top = newY(y, moveY, popUpWindow.offsetHeight, true) + 3 + "px";
                    popUpWindow.style.boxSizing = "border-box";
                    popUpWindow.style.borderStyle = 'unset';
                    popUpWindow.style.borderColor = 'unset';
                    popUpWindow.style.borderWidth = 'unset';
                    popUpWindow.style.borderRadius = '10px';
                    titleBar.removeEventListener("mouseup", mouseup);
                }
                titleBar.addEventListener("mouseup", mouseup);
            }
            // 移动盒子，盒子原来的位置+手指移动的距离。

            popUpWindow.style.left = newX(x, moveX, popUpWindow.offsetWidth) + "px";
            popUpWindow.style.top = newY(y, moveY, popUpWindow.offsetHeight) + "px";
            popUpWindow.style.right = "unset";
            popUpWindow.style.bottom = "unset";
            popUpWindow.style.boxSizing = "content-box";
            popUpWindow.style.borderStyle = 'solid';
            popUpWindow.style.borderColor = 'var(--theme_color)';
            popUpWindow.style.borderWidth = '3px';
            popUpWindow.style.borderRadius = '13px';
            e.preventDefault();
        }
    });
}

/* 用户登录窗口 */
for (let i = 0; i < document.getElementsByName('userLogin').length; i++) {
    document.getElementsByName('userLogin')[i].addEventListener('click', userLogin);
}

function userLogin(e) {
    showLoginWindow();
    e.stopPropagation();
}

function showLoginWindow() {
    if (document.body.offsetWidth < 780) {
        window.location.href = 'login.html';
        return;
    }
    let content = `
    <div class="popUpFrame">
        <div class="popUpWindow">
            <div class="titleBar">
                <button class="btn" id="closeLoginWindowBtn" ><span class="iconfont icon-guanbi"></span></button>
            </div>
            <div class="titleBarText">登录</div>
                <iframe class="windowContentIframe" src="login.html" id="userLoginContent" width="100%">
                
            </iframe>
        </div>
    </div>
    `;
    document.getElementById("loginWindow").innerHTML = content;
    document.getElementById('closeLoginWindowBtn').addEventListener('click', closeLoginWindow);
    document.getElementById('userLoginContent').onload = function () {
        document.getElementById('userLoginContent').contentWindow.document.getElementsByTagName('body')[0].classList.add("iframeBody");
    };
    windowDragInit("loginWindow");
    loadExtensionOptions();
}

function closeLoginWindow() {
    document.getElementById('closeLoginWindowBtn').removeEventListener('click', closeLoginWindow);
    for (let i = 0; i < document.getElementsByClassName('popUpFrame').length; i++) {
        document.getElementsByClassName('popUpFrame')[i].classList.add('popUpFrame_close');
    }
    for (let i = 0; i < document.querySelectorAll(".popUpFrame>.popUpWindow").length; i++) {
        document.querySelectorAll('.popUpFrame>.popUpWindow')[i].classList.add('popUpWindow_close');
    }
    setTimeout(function() {
        document.getElementById("loginWindow").innerHTML = "";
    }, 300);
}

/* 设置界面 */
for (let i = 0; i < document.getElementsByName('settings').length; i++) {
    document.getElementsByName('settings')[i].addEventListener('click', goSettings);
}

function goSettings(e) {
    showSettingsWindow();
    e.stopPropagation();
}

function showSettingsWindow() {
    if (document.body.offsetWidth < 780) {
        window.location.href = 'settings.html';
        return;
    }
    let content = `
    <div class="popUpFrame">
        <div class="popUpWindow">
            <div class="titleBar">
                <button class="btn" id="closeSettingsWindowBtn" ><span class="iconfont icon-guanbi"></span></button>
            </div>
            <div class="titleBarText">设置</div>
            <iframe class="windowContentIframe" src="settings.html" id="settingsContent" width="100%">
                
            </iframe>
        </div>
    </div>
    `;
    document.getElementById("setingsWindow").innerHTML = content;
    document.getElementById('closeSettingsWindowBtn').addEventListener('click', closeSettingsWindow);
    document.getElementById('settingsContent').onload = function () {
        document.getElementById('settingsContent').contentWindow.document.getElementsByTagName('body')[0].classList.add("iframeBody");
    };
    windowDragInit("setingsWindow");
    loadExtensionOptions();
}

function closeSettingsWindow() {
    document.getElementById('closeSettingsWindowBtn').removeEventListener('click', closeLoginWindow);
    for (let i = 0; i < document.getElementsByClassName('popUpFrame').length; i++) {
        document.getElementsByClassName('popUpFrame')[i].classList.add('popUpFrame_close');
    }
    for (let i = 0; i < document.querySelectorAll(".popUpFrame>.popUpWindow").length; i++) {
        document.querySelectorAll('.popUpFrame>.popUpWindow')[i].classList.add('popUpWindow_close');
    }
    setTimeout(function () {
        document.getElementById("setingsWindow").innerHTML = "";
    }, 300);
}