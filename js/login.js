if (self == top) {
    naviInit();
    titleBarInit();
}

function login(e) {
    let userid = document.getElementById('userid').value;
    let pwd = document.getElementById('password').value;
    if (!userid) {
        alert("请输入账号。");
        document.getElementById('userid').focus();
        return;
    }
    if (!pwd) {
        alert("请输入密码。");
        document.getElementById('password').focus();
        return;
    }
    ajaxPost("http://demo.ethan0ne.cn/server/", {
        userid: userid,
        password: pwd
    }, true, function (res) {
        let code = res.code;
        if (code == 0) {
            alert("登录成功");
        }
        else if (code == 3) {
            alert("用户不存在");
        }
        else if (code == 2) {
            alert("密码错误");
        }
        else {
            alert("发送未知错误");
        }
    });
    e.stopPropagation();
}

for (let i = 0; i < document.getElementsByName('loginBtn').length; i++) {
    document.getElementsByName('loginBtn')[i].addEventListener('click', login);
}

