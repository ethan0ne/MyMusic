function loadExtensionOptions() {
    let settings = {
        "appearance_blur": false,
        "allow_select": false,
    };
    try {
        let settingsStr = localStorage.getItem("settings");
        if (settingsStr) {
            settings = JSON.parse(settingsStr);
            document.getElementById('appearance_blur').checked = settings["appearance_blur"];
            document.getElementById('allow_select').checked = settings["allow_select"];
        }
    }
    catch {

    }
    appearance_blur_switch(settings["appearance_blur"]);
    allow_select_switch(settings["allow_select"]);
}

function appearance_blur_switch(status) {
    let objs = [];
    objs = objs.concat({
        "objs": document.querySelectorAll(".popUpFrame>.popUpWindow>.titleBar"),
        "attr": "blur(20px)"
    });
    objs = objs.concat({
        "objs": document.querySelectorAll(".title_bar"),
        "attr": "blur(20px)"
    });
    objs = objs.concat({
        "objs": document.querySelectorAll(".navi_bar"),
        "attr": "blur(20px)"
    });
    objs = objs.concat({
        "objs": document.querySelectorAll(".song_bar"),
        "attr": "blur(20px)"
    });
    objs = objs.concat({
        "objs": document.querySelectorAll(".bigBlockItem .footer"),
        "attr": "blur(30px)"
    });
    
    for (let i = 0; i < objs.length; i++) {
        for (let j = 0; j < objs[i].objs.length; j++) {
            if (status) {
                objs[i].objs[j].style.backdropFilter = objs[i].attr;
                objs[i].objs[j].style.webkitBackdropFilter = objs[i].attr;
            }
            else {
                objs[i].objs[j].style.backdropFilter = "unset";
                objs[i].objs[j].style.webkitBackdropFilter = "unset";
            }
        }
    }
    
}

function allow_select_switch(status) {
    let objs = [];
    objs = objs.concat({
        "objs": document.querySelectorAll("body"),
        "attr": "none"
    });
    
    for (let i = 0; i < objs.length; i++) {
        for (let j = 0; j < objs[i].objs.length; j++) {
            if (status) {
                objs[i].objs[j].style.userSelect = objs[i].attr;
                objs[i].objs[j].style.webkitUserSelect = objs[i].attr;
                objs[i].objs[j].style.MozUserSelect = objs[i].attr;
                objs[i].objs[j].style.msUserSelect = objs[i].attr;
                
            }
            else {
                objs[i].objs[j].style.userSelect = "unset";
                objs[i].objs[j].style.webkitUserSelect = "unset";
                objs[i].objs[j].style.MozUserSelect = "unset";
                objs[i].objs[j].style.msUserSelect = "unset";
            }
        }
    }
}

loadExtensionOptions();