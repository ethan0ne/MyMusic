if (self == top) {
    naviInit();
    titleBarInit();
    document.querySelector(".main_content>.block>.title").style.display = "block";
}

init();

function init() {
    document.getElementById('appearance_blur').addEventListener('change', saveChanged);
    document.getElementById('allow_select').addEventListener('change', saveChanged);

    let settings = {
        "appearance_blur": false,
        "allow_select": false,
    };
    try {
        let settingsStr = localStorage.getItem("settings");
        settings = JSON.parse(settingsStr);
        document.getElementById('appearance_blur').checked = settings["appearance_blur"];
        document.getElementById('allow_select').checked = settings["allow_select"];
    }
    catch {

    }
}

function saveChanged(e) {
    let appearance_blur = document.getElementById('appearance_blur').checked;
    let allow_select = document.getElementById('allow_select').checked;
    let settings = {
        "appearance_blur": appearance_blur,
        "allow_select": allow_select,
    };
    let settingsStr = JSON.stringify(settings);
    try {
        localStorage.setItem("settings", settingsStr);
    }
    catch {
        alert("保存更改出错，请稍后重试。");
    }
    loadExtensionOptions();
    parent.loadExtensionOptions();
}