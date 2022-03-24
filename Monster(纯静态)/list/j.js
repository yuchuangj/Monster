//这是页数按钮
function three() {
    alert("第二页是隐私！！");
}

function two() {
    alert("后续更新！");
}

//这是load事件 弹出窗口
function showAdWin() {
    adwin = window.open("list/open.html", "win2", "width=500,height=140");
    adwin.moveTo(600, 20);
    setTimeout("adwin.close()", 4000);
}

//这是页面
window.onload = function() {
        var audio = document.getElementById('music');
        audio.pause(); //打开页面时无音乐
    }
    //这是图片点击音乐
function play() {
    var audio = document.getElementById('music');
    if (audio.paused) {
        audio.play();
        alert("开始播放音乐")

    } else {
        audio.pause();
        alert("暂停音乐")
    }
}

//这是lishiwenwu最右边的微信图片JS
function img() {
    alert("请联系我150xxx48107")
}