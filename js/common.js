for (let i = 0; i < document.getElementsByName('goIndex').length; i++) {
    document.getElementsByName('goIndex')[i].addEventListener('click', goIndex);
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
        window.location.href = '/login.html';
        return;
    }
    let content = `
    <div class="popUpFrame">
        <div class="popUpWindow">
            <div class="titleBar">
                <button class="btn" id="closeLoginWindowBtn" ><span class="iconfont icon-guanbi"></span></button>
            </div>
            <div class="titleBarText">登录</div>
            <iframe class="windowContentIframe" src="/login.html" id="userLoginContent" width="100%">
                
            </iframe>
        </div>
    </div>
    `;
    document.getElementById("loginWindow").innerHTML = content;
    document.getElementById('closeLoginWindowBtn').addEventListener('click', closeLoginWindow);
    document.getElementById('userLoginContent').onload = function () {
        document.getElementById('userLoginContent').contentWindow.document.getElementsByTagName('body')[0].classList.add("iframeBody");
    };
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
        window.location.href = '/settings.html';
        return;
    }
    let content = `
    <div class="popUpFrame">
        <div class="popUpWindow">
            <div class="titleBar">
                <button class="btn" id="closeSettingsWindowBtn" ><span class="iconfont icon-guanbi"></span></button>
            </div>
            <div class="titleBarText">设置</div>
            <iframe class="windowContentIframe" src="/settings.html" id="settingsContent" width="100%">
                
            </iframe>
        </div>
    </div>
    `;
    document.getElementById("setingsWindow").innerHTML = content;
    document.getElementById('closeSettingsWindowBtn').addEventListener('click', closeSettingsWindow);
    document.getElementById('settingsContent').onload = function () {
        document.getElementById('settingsContent').contentWindow.document.getElementsByTagName('body')[0].classList.add("iframeBody");
    };
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