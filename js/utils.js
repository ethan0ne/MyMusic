function getElementByDataTag(attribute, value) {
    attribute = "data-" + attribute;
    var all = document.getElementsByTagName('*');
    for (var i = 0; i < all.length; i++) {
        if (all[i].getAttribute(attribute) == value) {
            return all[i];
        }
    }
}

function goIndex(e) {
    window.location.href = 'catalog.html';
    e.stopPropagation();
}

function formatParams(data) {
    let arr = [];
    for (let name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    arr.push(("v=" + Math.random()).replace(".", ""));
    return arr.join("&");
}

function ajaxGet(url, query = null, sync = true, successCallBack = null, failCallBack = null, jsonParse = true) {
    if (query) {
        let parms = formatParams(query);
        url += '?' + parms;
    }

    let ajax = new XMLHttpRequest();
    ajax.open("GET", url, sync);
    ajax.send(null);
    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                let res = jsonParse ? JSON.parse(ajax.responseText == "" ? '{}' : ajax.responseText) : ajax.responseText;
                successCallBack && successCallBack(res);
            } else {
                failCallBack && failCallBack();
            }

        }
    }
}

function ajaxPost(url, data = null, sync = true, successCallBack = null, failCallBack = null, jsonParse = true) {
    let ajax = new XMLHttpRequest();
    ajax.open("POST", url, sync);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send(data ? JSON.stringify(data) : "{}");
    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                let res = jsonParse ? JSON.parse(ajax.responseText == "" ? '{}' : ajax.responseText) : ajax.responseText;
                successCallBack && successCallBack(res);
            } else {
                failCallBack && failCallBack();
            }

        }
    }
}